import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o884eac-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o884eac-m"/>`,
		"fallback": "ix:upper-limit",
	});
}

export default Component;
