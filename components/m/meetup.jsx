import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlx_r6b-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlx_r6b-p"/>`,
		"fallback": "cib:meetup",
	});
}

export default Component;
