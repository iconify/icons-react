import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wob2l3rnn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wob2l3rnn"/>`,
		"fallback": "carbon:open-panel-filled-top",
	});
}

export default Component;
