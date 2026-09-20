import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ru94hfg8j.css';
import '../../css/l/lv1-rx6tk.css';
import '../../css/q/q2ossk_gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ru94hfg8j"/><path class="lv1-rx6tk"/><path class="q2ossk_gv"/></g>`,
		"fallback": "streamline-freehand:notes-add",
	});
}

export default Component;
