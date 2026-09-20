import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5f08b2c.css';

const viewBox = {"width":256,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5f08b2c"/>`,
		"fallback": "thesvg-color:vercel-dark",
	});
}

export default Component;
