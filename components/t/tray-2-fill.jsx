import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cazy9sb6v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cazy9sb6v"/>`,
		"fallback": "f7:tray-2-fill",
	});
}

export default Component;
