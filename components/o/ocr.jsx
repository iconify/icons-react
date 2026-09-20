import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4ril9bys.css';
import '../../css/j/jpg3fab-z.css';
import '../../css/y/y7lv7g-4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4ril9bys"/><path class="jpg3fab-z"/><path class="y7lv7g-4n"/>`,
		"fallback": "ooui:ocr",
	});
}

export default Component;
