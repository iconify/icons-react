import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc_3cbc1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc_3cbc1b"/>`,
		"fallback": "fluent-emoji-high-contrast:toothbrush",
	});
}

export default Component;
