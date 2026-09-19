import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn-044cbo.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn-044cbo"/>`,
		"fallback": "ps:mail-bill",
	});
}

export default Component;
