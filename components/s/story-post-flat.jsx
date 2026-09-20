import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jlojk5b-u.css';
import '../../css/w/wmcz2jrbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jlojk5b-u"/><path class="wmcz2jrbf"/></g>`,
		"fallback": "streamline-flex-color:story-post-flat",
	});
}

export default Component;
