import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahxe6_p3m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahxe6_p3m"/>`,
		"fallback": "f7:text-bubble-fill",
	});
}

export default Component;
