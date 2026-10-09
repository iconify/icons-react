import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3zoshwv.css';
import '../../css/u/uf825eo1h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3zoshwv"/><path class="uf825eo1h"/>`,
		"fallback": "energy-icons:search-20-bold",
	});
}

export default Component;
