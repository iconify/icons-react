import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ktb-bmq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ktb-bmq"/>`,
		"fallback": "simple-line-icons:size-fullscreen",
	});
}

export default Component;
