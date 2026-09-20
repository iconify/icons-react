import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1qcgebez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1qcgebez"/>`,
		"fallback": "ix:trace-eye",
	});
}

export default Component;
