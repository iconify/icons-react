import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4-h6-tbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4-h6-tbe"/>`,
		"fallback": "ix:polarchart-filled",
	});
}

export default Component;
