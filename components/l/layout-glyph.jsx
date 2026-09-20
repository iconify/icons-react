import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chg07sp7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chg07sp7c"/>`,
		"fallback": "pixelarticons:layout-glyph",
	});
}

export default Component;
