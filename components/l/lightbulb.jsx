import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac5hl7b6b.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac5hl7b6b"/>`,
		"fallback": "fa6-solid:lightbulb",
	});
}

export default Component;
