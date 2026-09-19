import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldv4xub-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldv4xub-p"/>`,
		"fallback": "cib:kentico",
	});
}

export default Component;
