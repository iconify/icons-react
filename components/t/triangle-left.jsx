import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-vmj1b7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-vmj1b7k"/>`,
		"fallback": "pinhead:triangle-left",
	});
}

export default Component;
