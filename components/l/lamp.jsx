import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qszfiggjs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qszfiggjs"/>`,
		"fallback": "fluent-mdl2:lamp",
	});
}

export default Component;
