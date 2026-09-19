import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwuvu9b4i.css';
import '../../css/t/tdietctib.css';
import '../../css/o/om-bzm87k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hwuvu9b4i"><path class="tdietctib"/><path class="om-bzm87k"/></g>`,
		"fallback": "fluent-emoji-flat:musical-notes",
	});
}

export default Component;
