import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avh0x4bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avh0x4bfp"/>`,
		"fallback": "ri:mail-forbid-line",
	});
}

export default Component;
