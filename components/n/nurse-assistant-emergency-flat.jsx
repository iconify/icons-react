import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9a7a1b1t.css';
import '../../css/h/hlhamccdf.css';
import '../../css/g/gws2kpbvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9a7a1b1t"/><path class="hlhamccdf"/><path clip-rule="evenodd" class="gws2kpbvb"/></g>`,
		"fallback": "streamline-color:nurse-assistant-emergency-flat",
	});
}

export default Component;
