import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftt5f1qgu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftt5f1qgu"/>`,
		"fallback": "fluent-mdl2:open-pane",
	});
}

export default Component;
