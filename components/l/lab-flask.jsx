import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kil35zu_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kil35zu_l"/>`,
		"fallback": "ooui:lab-flask",
	});
}

export default Component;
