import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8zl8jb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8zl8jb-j"/>`,
		"fallback": "mdi:newspaper-variant",
	});
}

export default Component;
