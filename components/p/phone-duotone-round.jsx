import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdx0z35ly.css';
import '../../css/c/ckwi-dj5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mdx0z35ly"/><path class="ckwi-dj5d"/></g>`,
		"fallback": "coolicons:phone-duotone-round",
	});
}

export default Component;
