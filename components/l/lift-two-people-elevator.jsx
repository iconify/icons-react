import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnl9hwkia.css';
import '../../css/u/uf60c4b1b.css';
import '../../css/s/s03jz_ioe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnl9hwkia"/><path class="uf60c4b1b"/><path class="s03jz_ioe"/></g>`,
		"fallback": "streamline-freehand-color:lift-two-people-elevator",
	});
}

export default Component;
