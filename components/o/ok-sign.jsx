import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtbdm7b9w.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtbdm7b9w"/>`,
		"fallback": "el:ok-sign",
	});
}

export default Component;
