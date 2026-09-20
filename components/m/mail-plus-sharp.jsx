import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op6rsqb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op6rsqb4w"/>`,
		"fallback": "keyline-icons:mail-plus-sharp",
	});
}

export default Component;
