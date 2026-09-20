import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jw5h7ux5l.css';
import '../../css/f/f0xroko2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jw5h7ux5l"/><path class="f0xroko2d"/></g>`,
		"fallback": "streamline-flex-color:politics-vote-2-flat",
	});
}

export default Component;
