import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj_3yzbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj_3yzbcv"/>`,
		"fallback": "flowbite:trash-bin-outline",
	});
}

export default Component;
