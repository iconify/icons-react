import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9ep0lbqw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9ep0lbqw"/>`,
		"fallback": "fad:logo-abletonlink",
	});
}

export default Component;
