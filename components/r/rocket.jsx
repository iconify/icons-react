import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh2c8vt1h.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh2c8vt1h"/>`,
		"fallback": "fontisto:rocket",
	});
}

export default Component;
