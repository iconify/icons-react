import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_9gdlbwc.css';
import '../../css/u/ucd9-zbsv.css';
import '../../css/h/he_hx-ara.css';
import '../../css/a/a2i6mqb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_9gdlbwc"/><path class="ucd9-zbsv"/><path class="he_hx-ara"/><path class="a2i6mqb_l"/></g>`,
		"fallback": "streamline-ultimate-color:notes-paper-text",
	});
}

export default Component;
