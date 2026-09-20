import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5pwsvboj.css';

const viewBox = {"width":1545,"height":1151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5pwsvboj"/>`,
		"fallback": "thesvg:onex",
	});
}

export default Component;
