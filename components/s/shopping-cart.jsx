import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuy1aab-e.css';
import '../../css/k/keh7f8wkw.css';
import '../../css/i/ikwvq7b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuy1aab-e wm-k"/><path class="keh7f8wkw wm-a"/><path class="ikwvq7b1d wm-k"/>`,
		"fallback": "withicons-bauhaus:shopping-cart",
	});
}

export default Component;
