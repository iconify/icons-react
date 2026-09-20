import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4t60vxkf.css';
import '../../css/d/do9x0cbvf.css';
import '../../css/j/j-15sc15t.css';
import '../../css/o/ofqb0_s4z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4t60vxkf"/><path class="do9x0cbvf"/><path class="j-15sc15t"/><path class="ofqb0_s4z"/>`,
		"fallback": "thesvg-color:strapi",
	});
}

export default Component;
