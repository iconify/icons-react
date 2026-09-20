import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp8jjlbzx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp8jjlbzx"/>`,
		"fallback": "pinhead:triangle-right-with-plus",
	});
}

export default Component;
