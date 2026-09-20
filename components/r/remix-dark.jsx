import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytk9vubnv.css';

const viewBox = {"width":256,"height":297};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytk9vubnv"/>`,
		"fallback": "thesvg-color:remix-dark",
	});
}

export default Component;
