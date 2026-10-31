import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ufa5_sllq.css';
import '../../css/j/j7muc2v1c.css';
import '../../css/g/gybihlwlp.css';
import '../../css/b/bjwpd3fxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ufa5_sllq wm-shadow"/><path class="j7muc2v1c wm-shadow"/><path class="gybihlwlp"/><path class="bjwpd3fxo"/></g>`,
		"fallback": "withicons-brutal:shopping-cart",
	});
}

export default Component;
