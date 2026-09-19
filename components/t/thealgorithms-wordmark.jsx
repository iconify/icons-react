import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcnuh7clv.css';
import '../../css/y/y3s_gsbxm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcnuh7clv"/><path class="y3s_gsbxm"/>`,
		"fallback": "devicon:thealgorithms-wordmark",
	});
}

export default Component;
