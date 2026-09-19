import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivljsvk_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivljsvk_a"/>`,
		"fallback": "cib:squarespace",
	});
}

export default Component;
