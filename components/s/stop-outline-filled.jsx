import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/demkhgwzh.css';
import '../../css/t/to1_2obdh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="demkhgwzh"/><path class="to1_2obdh"/>`,
		"fallback": "carbon:stop-outline-filled",
	});
}

export default Component;
