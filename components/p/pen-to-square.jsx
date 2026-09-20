import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msu-j-bsq.css';
import '../../css/j/j4ehiv-dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="msu-j-bsq"/><path class="j4ehiv-dt"/>`,
		"fallback": "lineicons:pen-to-square",
	});
}

export default Component;
