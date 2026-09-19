import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs56q1bsr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs56q1bsr"/>`,
		"fallback": "fa7-solid:toggle-on",
	});
}

export default Component;
