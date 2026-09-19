import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppt0_abcx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppt0_abcx"/>`,
		"fallback": "devicon-plain:typeorm-wordmark",
	});
}

export default Component;
