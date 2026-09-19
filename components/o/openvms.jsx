import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da3mhqb4c.css';

const viewBox = {"width":374,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da3mhqb4c"/>`,
		"fallback": "file-icons:openvms",
	});
}

export default Component;
