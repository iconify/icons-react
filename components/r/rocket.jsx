import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3_b9ib7p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3_b9ib7p"/>`,
		"fallback": "picon:rocket",
	});
}

export default Component;
