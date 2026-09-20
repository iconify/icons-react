import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epst0e1jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epst0e1jr"/>`,
		"fallback": "mdi:numeric-5-box-multiple",
	});
}

export default Component;
