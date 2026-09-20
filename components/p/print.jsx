import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/e/ek8eycbfz.css';
import '../../css/b/b4q5icciq.css';
import '../../css/z/zbx2d_b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="ek8eycbfz"/><path class="b4q5icciq"/><path class="zbx2d_b7p"/></g>`,
		"fallback": "lets-icons:print",
	});
}

export default Component;
