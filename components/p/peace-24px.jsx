import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9m7r_x7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9m7r_x7n"/>`,
		"fallback": "healthicons:peace-24px",
	});
}

export default Component;
