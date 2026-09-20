import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ad6t4cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ad6t4cx"/>`,
		"fallback": "simple-icons:scrapbox",
	});
}

export default Component;
