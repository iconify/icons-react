import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wp4x8idrs.css';
import '../../css/d/dlb81wbab.css';
import '../../css/a/axg75jbeb.css';
import '../../css/b/b6ilgbv7h.css';
import '../../css/i/ixo3iuasf.css';
import '../../css/l/lillxnbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k wp4x8idrs"/><path class="dlb81wbab wm-deco"/><path class="axg75jbeb wm-k"/><path class="b6ilgbv7h wm-shadow"/><path class="ixo3iuasf wm-shine"/><path class="lillxnbnm wm-shine"/></g>`,
		"fallback": "withicons-valentine:star",
	});
}

export default Component;
