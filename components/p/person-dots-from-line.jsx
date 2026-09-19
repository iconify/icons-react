import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2a_qteud.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2a_qteud"/>`,
		"fallback": "fa7-solid:person-dots-from-line",
	});
}

export default Component;
