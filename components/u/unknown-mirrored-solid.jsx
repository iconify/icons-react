import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir93gyblz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir93gyblz"/>`,
		"fallback": "fluent-mdl2:unknown-mirrored-solid",
	});
}

export default Component;
