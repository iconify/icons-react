import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm1-l0cmj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jm1-l0cmj"/>`,
		"fallback": "heroicons:stop-circle-20-solid",
	});
}

export default Component;
