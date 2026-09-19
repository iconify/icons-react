import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uetza5byp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uetza5byp"/>`,
		"fallback": "f7:placemark-fill",
	});
}

export default Component;
