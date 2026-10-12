import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha7298_1d.css';
import '../../css/w/wieaolbut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha7298_1d"/><path class="wieaolbut"/>`,
		"fallback": "energy-icons:password-20",
	});
}

export default Component;
