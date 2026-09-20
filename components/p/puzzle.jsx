import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as6u8f6hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as6u8f6hn"/>`,
		"fallback": "lucide:puzzle",
	});
}

export default Component;
