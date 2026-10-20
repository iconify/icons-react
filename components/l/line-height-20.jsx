import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kak5-8b1v.css';
import '../../css/y/ylye7u88m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kak5-8b1v"/><path class="ylye7u88m"/>`,
		"fallback": "energy-icons:line-height-20",
	});
}

export default Component;
