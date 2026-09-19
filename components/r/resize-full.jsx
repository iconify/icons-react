import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d48o06bxz.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d48o06bxz"/>`,
		"fallback": "websymbol:resize-full",
	});
}

export default Component;
