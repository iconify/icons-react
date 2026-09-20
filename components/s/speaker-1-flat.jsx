import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvzxmabom.css';
import '../../css/b/bhbipcf1s.css';
import '../../css/j/jm6z8vbix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hvzxmabom"/><path class="bhbipcf1s"/><path class="jm6z8vbix"/></g>`,
		"fallback": "streamline-flex-color:speaker-1-flat",
	});
}

export default Component;
