import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-9y3bdj.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj-9y3bdj"/>`,
		"fallback": "fa6-regular:lightbulb",
	});
}

export default Component;
