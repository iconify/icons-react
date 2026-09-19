import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ufupj8t.css';
import '../../css/b/bfqat1bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ufupj8t"/><path class="bfqat1bhy"/>`,
		"fallback": "bx:news",
	});
}

export default Component;
