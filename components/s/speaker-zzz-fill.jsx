import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8lq-06uw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8lq-06uw"/>`,
		"fallback": "f7:speaker-zzz-fill",
	});
}

export default Component;
