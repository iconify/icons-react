import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrb30dbeb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrb30dbeb"/>`,
		"fallback": "f7:sticker",
	});
}

export default Component;
