import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz0jswbjr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz0jswbjr"/>`,
		"fallback": "f7:phone-fill-arrow-up-right",
	});
}

export default Component;
