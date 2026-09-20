import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_79vjrtv.css';
import '../../css/u/uhxyiso9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_79vjrtv"/><path class="uhxyiso9i"/></g>`,
		"fallback": "tdesign:undertake-environment-protection",
	});
}

export default Component;
