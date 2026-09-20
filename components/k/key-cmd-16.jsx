import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg1xqtbhl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tg1xqtbhl"/>`,
		"fallback": "qlementine-icons:key-cmd-16",
	});
}

export default Component;
