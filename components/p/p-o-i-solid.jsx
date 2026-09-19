import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdt66ccyd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdt66ccyd"/>`,
		"fallback": "fluent-mdl2:p-o-i-solid",
	});
}

export default Component;
