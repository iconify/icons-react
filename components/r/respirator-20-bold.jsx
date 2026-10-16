import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdz6p2bks.css';
import '../../css/c/c8s5nepqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdz6p2bks"/><path class="c8s5nepqw"/>`,
		"fallback": "energy-icons:respirator-20-bold",
	});
}

export default Component;
