import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zo9swtb2b.css';
import '../../css/b/bhmbowbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zo9swtb2b"/><path class="bhmbowbkk"/></g>`,
		"fallback": "streamline-sharp-color:phone-ringing-1-flat",
	});
}

export default Component;
