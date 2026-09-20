import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyw10oeoa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyw10oeoa"/>`,
		"fallback": "ix:user-filled",
	});
}

export default Component;
