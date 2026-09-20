import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u91qbn_yn.css';
import '../../css/k/kx05ww6-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u91qbn_yn"/><path class="kx05ww6-b"/></g>`,
		"fallback": "tdesign:table-add",
	});
}

export default Component;
