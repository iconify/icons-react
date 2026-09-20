import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sdaubpbmy.css';
import '../../css/x/xzkqvq6ne.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sdaubpbmy"/><path class="xzkqvq6ne"/></g>`,
		"fallback": "streamline-color:logout-1-flat",
	});
}

export default Component;
