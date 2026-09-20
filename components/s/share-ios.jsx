import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5n8ghm7o.css';
import '../../css/w/wq_f_lb3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5n8ghm7o"/><path class="wq_f_lb3v"/>`,
		"fallback": "ooui:share-ios",
	});
}

export default Component;
