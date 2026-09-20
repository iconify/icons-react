import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odd2okbuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odd2okbuc"/>`,
		"fallback": "ooui:vision-simulator",
	});
}

export default Component;
