import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfqsajb2u.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfqsajb2u"/>`,
		"fallback": "fa-solid:prescription-bottle",
	});
}

export default Component;
