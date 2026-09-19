import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_tc7vb2n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_tc7vb2n"/>`,
		"fallback": "f7:list-bullet-below-rectangle",
	});
}

export default Component;
