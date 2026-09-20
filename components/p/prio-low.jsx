import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zplot3v2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zplot3v2c"/>`,
		"fallback": "ix:prio-low",
	});
}

export default Component;
