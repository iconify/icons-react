import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy-u42bhp.css';
import '../../css/b/bkoar43ua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy-u42bhp"/><path class="bkoar43ua"/>`,
		"fallback": "energy-icons:message-check-48-bold",
	});
}

export default Component;
