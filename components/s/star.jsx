import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-4p1bbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec-4p1bbt"/>`,
		"fallback": "bi:star",
	});
}

export default Component;
