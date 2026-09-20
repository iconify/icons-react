import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-v-b8bnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-v-b8bnj"/>`,
		"fallback": "ooui:logo-wiktionary",
	});
}

export default Component;
