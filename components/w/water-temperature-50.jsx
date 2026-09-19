import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7020zbci.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7020zbci"/>`,
		"fallback": "ps:water-temperature-50",
	});
}

export default Component;
