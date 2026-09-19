import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k37wizbef.css';
import '../../css/o/otjvghwvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k37wizbef"/><path class="otjvghwvk"/>`,
		"fallback": "carbon:network-overlay",
	});
}

export default Component;
