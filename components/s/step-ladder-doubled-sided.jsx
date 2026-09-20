import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo2gw7byy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo2gw7byy"/>`,
		"fallback": "pinhead:step-ladder-doubled-sided",
	});
}

export default Component;
