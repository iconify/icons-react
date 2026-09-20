import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6uw3rb1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6uw3rb1w"/>`,
		"fallback": "la:quran-solid",
	});
}

export default Component;
