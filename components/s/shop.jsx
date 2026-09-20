import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ix6i1v8-a.css';
import '../../css/p/ptn4d776z.css';
import '../../css/w/w075vybfy.css';
import '../../css/f/fn13rwetu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ix6i1v8-a"/><path class="ptn4d776z"/><path class="w075vybfy"/><path class="fn13rwetu"/></g>`,
		"fallback": "streamline-freehand-color:shop",
	});
}

export default Component;
