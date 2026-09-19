import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja05_tojk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja05_tojk"/>`,
		"fallback": "file-icons:moment-timezone",
	});
}

export default Component;
