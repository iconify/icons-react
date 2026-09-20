import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc3uyyb3f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc3uyyb3f"/>`,
		"fallback": "raphael:mail",
	});
}

export default Component;
