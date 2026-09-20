import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-kbc2bzf.css';
import '../../css/l/l4ki6lbzu.css';
import '../../css/n/nkz6axb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i-kbc2bzf"/><path class="l4ki6lbzu"/><path class="nkz6axb6t"/></g>`,
		"fallback": "lets-icons:user-add-alt-fill",
	});
}

export default Component;
