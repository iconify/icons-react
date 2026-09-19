import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiznykb3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiznykb3b"/>`,
		"fallback": "carbon:ref-evapotranspiration",
	});
}

export default Component;
