import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_1tuyjpg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_1tuyjpg"/>`,
		"fallback": "pinhead:phone-down-above-999",
	});
}

export default Component;
