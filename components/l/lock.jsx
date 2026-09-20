import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxg-_if6l.css';
import '../../css/f/fo24v8b1b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxg-_if6l"/><path class="fo24v8b1b"/>`,
		"fallback": "ooui:lock",
	});
}

export default Component;
