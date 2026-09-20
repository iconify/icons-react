import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8cx_kbou.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8cx_kbou"/>`,
		"fallback": "wi:night-alt-partly-cloudy",
	});
}

export default Component;
