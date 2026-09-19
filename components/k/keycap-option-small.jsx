import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8a072jfy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8a072jfy"/>`,
		"fallback": "dinkie-icons:keycap-option-small",
	});
}

export default Component;
