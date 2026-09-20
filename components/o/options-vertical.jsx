import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0-gr6bbv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0-gr6bbv"/>`,
		"fallback": "simple-line-icons:options-vertical",
	});
}

export default Component;
