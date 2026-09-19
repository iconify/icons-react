import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is3vjhbys.css';
import '../../css/w/wgy-1_e7a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is3vjhbys"/><path class="wgy-1_e7a"/>`,
		"fallback": "devicon:traefikmesh-wordmark",
	});
}

export default Component;
