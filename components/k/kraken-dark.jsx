import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij5gh3byz.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij5gh3byz"/>`,
		"fallback": "thesvg-color:kraken-dark",
	});
}

export default Component;
