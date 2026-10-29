import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0p74yb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0p74yb4j"/>`,
		"fallback": "withicons:superscript-solid",
	});
}

export default Component;
