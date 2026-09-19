import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t68k2db2d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t68k2db2d"/>`,
		"fallback": "f7:plus-square",
	});
}

export default Component;
