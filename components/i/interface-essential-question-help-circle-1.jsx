import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew79pli5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew79pli5n"/>`,
		"fallback": "streamline-pixel:interface-essential-question-help-circle-1",
	});
}

export default Component;
