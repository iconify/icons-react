import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpnpk4e6q.css';
import '../../css/i/igdewsque.css';
import '../../css/w/w8w8g15oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpnpk4e6q"/><path class="igdewsque"/><path clip-rule="evenodd" class="w8w8g15oz"/>`,
		"fallback": "solar:tuning-square-bold",
	});
}

export default Component;
