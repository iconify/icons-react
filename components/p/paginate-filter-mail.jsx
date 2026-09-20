import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oo9ekk4gg.css';
import '../../css/c/c2v5kebyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oo9ekk4gg"/><path class="c2v5kebyj"/></g>`,
		"fallback": "streamline-freehand-color:paginate-filter-mail",
	});
}

export default Component;
