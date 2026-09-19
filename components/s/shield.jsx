import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl-q4qtnk.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl-q4qtnk"/>`,
		"fallback": "fa:shield",
	});
}

export default Component;
