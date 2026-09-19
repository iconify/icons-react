import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/himehxbog.css';
import '../../css/j/jhsk6hp0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="himehxbog"/><path class="jhsk6hp0l"/>`,
		"fallback": "bxs:volume-full",
	});
}

export default Component;
