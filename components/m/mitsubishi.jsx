import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqowjq_6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqowjq_6b"/>`,
		"fallback": "simple-icons:mitsubishi",
	});
}

export default Component;
