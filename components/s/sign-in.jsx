import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zonh8mbgv.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zonh8mbgv"/>`,
		"fallback": "zmdi:sign-in",
	});
}

export default Component;
