import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpmg4f9qv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpmg4f9qv"/>`,
		"fallback": "cil:user-follow",
	});
}

export default Component;
