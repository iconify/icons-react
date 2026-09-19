import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad1o_lclx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad1o_lclx"/>`,
		"fallback": "fluent-emoji-flat:small-blue-diamond",
	});
}

export default Component;
