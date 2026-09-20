import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvxce2hwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvxce2hwk"/>`,
		"fallback": "raphael:taxi",
	});
}

export default Component;
