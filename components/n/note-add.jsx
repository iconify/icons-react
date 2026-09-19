import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3ke734ah.css';
import '../../css/z/zagwqcton.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3ke734ah"/><path class="zagwqcton"/>`,
		"fallback": "cil:note-add",
	});
}

export default Component;
