import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vap8vfq9f.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vap8vfq9f"/>`,
		"fallback": "zmdi:refresh-alt",
	});
}

export default Component;
