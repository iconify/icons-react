import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh42lmqfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh42lmqfg"/>`,
		"fallback": "fluent-emoji-high-contrast:star",
	});
}

export default Component;
