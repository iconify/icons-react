import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocjh6qbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocjh6qbnl"/>`,
		"fallback": "eos-icons:state",
	});
}

export default Component;
