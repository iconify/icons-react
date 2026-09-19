import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er9vcipei.css';

const viewBox = {"width":888,"height":786};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er9vcipei"/>`,
		"fallback": "ls:w-upper-case",
	});
}

export default Component;
