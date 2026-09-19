import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ban2-eb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ban2-eb"/>`,
		"fallback": "f7:question-circle",
	});
}

export default Component;
