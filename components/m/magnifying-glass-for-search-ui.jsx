import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfti8x3ha.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfti8x3ha"/>`,
		"fallback": "pinhead:magnifying-glass-for-search-ui",
	});
}

export default Component;
