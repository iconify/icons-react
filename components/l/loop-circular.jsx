import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms9_73-iw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms9_73-iw"/>`,
		"fallback": "cil:loop-circular",
	});
}

export default Component;
