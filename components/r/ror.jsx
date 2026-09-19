import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjn5tlbla.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjn5tlbla"/>`,
		"fallback": "fa7-brands:ror",
	});
}

export default Component;
