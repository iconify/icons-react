import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1iipw_zi.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1iipw_zi"/>`,
		"fallback": "zmdi:memory",
	});
}

export default Component;
