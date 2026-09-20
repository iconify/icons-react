import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucnvjn25j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucnvjn25j"/>`,
		"fallback": "lucide:list-checks",
	});
}

export default Component;
