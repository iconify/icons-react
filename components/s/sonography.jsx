import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8k4hxboj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8k4hxboj"/>`,
		"fallback": "healthicons:sonography",
	});
}

export default Component;
