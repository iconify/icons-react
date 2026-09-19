import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnt7c7sej.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnt7c7sej"/>`,
		"fallback": "vs:kakaotalk",
	});
}

export default Component;
