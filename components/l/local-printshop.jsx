import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvpbq8bgj.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvpbq8bgj"/>`,
		"fallback": "zmdi:local-printshop",
	});
}

export default Component;
