import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja084uz5x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja084uz5x"/>`,
		"fallback": "simple-line-icons:notebook",
	});
}

export default Component;
