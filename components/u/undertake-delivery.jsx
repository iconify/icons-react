import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn7yr3b-j.css';
import '../../css/a/a389rlbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kn7yr3b-j"/><path class="a389rlbxg"/></g>`,
		"fallback": "tdesign:undertake-delivery",
	});
}

export default Component;
