import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ij81hxx_m.css';
import '../../css/n/njf102m7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ij81hxx_m"/><path class="njf102m7u"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-font-size",
	});
}

export default Component;
