import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvwby7ij.css';
import '../../css/h/he5aljhkn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvwby7ij"/><path class="he5aljhkn"/>`,
		"fallback": "temaki:waste-meter",
	});
}

export default Component;
