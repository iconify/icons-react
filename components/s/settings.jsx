import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/re8lld-el.css';
import '../../css/i/inz9m4wmz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="re8lld-el"/><circle class="inz9m4wmz"/></g>`,
		"fallback": "bytesize:settings",
	});
}

export default Component;
