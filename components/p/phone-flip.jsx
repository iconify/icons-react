import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqiy_7vqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqiy_7vqo"/>`,
		"fallback": "bi:phone-flip",
	});
}

export default Component;
