import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef-ovpf1v.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef-ovpf1v"/>`,
		"fallback": "wi:moon-alt-waning-gibbous-2",
	});
}

export default Component;
