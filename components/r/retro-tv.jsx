import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg-xa_blz.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg-xa_blz"/>`,
		"fallback": "wpf:retro-tv",
	});
}

export default Component;
