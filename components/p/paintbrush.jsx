import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hss7tib0m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hss7tib0m"/>`,
		"fallback": "whh:paintbrush",
	});
}

export default Component;
