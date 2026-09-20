import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_bxzvurr.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_bxzvurr"/>`,
		"fallback": "wi:sunset",
	});
}

export default Component;
