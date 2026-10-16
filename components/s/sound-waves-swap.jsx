import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i7gfde8ng.css';
import '../../css/n/n_z65_bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i7gfde8ng"/><path class="n_z65_bwe"/></g>`,
		"fallback": "andrsrxn:sound-waves-swap",
	});
}

export default Component;
