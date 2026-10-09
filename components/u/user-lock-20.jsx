import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9-5dabgd.css';
import '../../css/x/x-j00pe6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9-5dabgd"/><path class="x-j00pe6r"/>`,
		"fallback": "energy-icons:user-lock-20",
	});
}

export default Component;
