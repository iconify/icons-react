import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgun8acjq.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgun8acjq"/>`,
		"fallback": "system-uicons:panel-left",
	});
}

export default Component;
