import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-qqtb5y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-qqtb5y"/>`,
		"fallback": "la:store-alt",
	});
}

export default Component;
