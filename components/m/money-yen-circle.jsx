import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahk5vlbnh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahk5vlbnh"/>`,
		"fallback": "f7:money-yen-circle",
	});
}

export default Component;
