import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqalj6buc.css';

const viewBox = {"width":2048,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqalj6buc"/>`,
		"fallback": "fa:toggle-on",
	});
}

export default Component;
