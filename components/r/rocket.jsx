import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd6s21l_z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd6s21l_z"/>`,
		"fallback": "radix-icons:rocket",
	});
}

export default Component;
