import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqh-8_m-a.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqh-8_m-a"/>`,
		"fallback": "zmdi:square-o",
	});
}

export default Component;
