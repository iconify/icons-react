import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orzt67brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orzt67brv"/>`,
		"fallback": "eos-icons:timeout",
	});
}

export default Component;
