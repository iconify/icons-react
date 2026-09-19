import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/som-8wzkt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="som-8wzkt"/>`,
		"fallback": "fa7-solid:oil-can",
	});
}

export default Component;
