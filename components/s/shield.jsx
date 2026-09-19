import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwwv59bwm.css';

const viewBox = {"width":384,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwwv59bwm"/>`,
		"fallback": "ps:shield",
	});
}

export default Component;
