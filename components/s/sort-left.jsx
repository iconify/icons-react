import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlk1spbag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlk1spbag"/>`,
		"fallback": "icons8:sort-left",
	});
}

export default Component;
