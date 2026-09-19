import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcwojl0gm.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcwojl0gm"/>`,
		"fallback": "zmdi:photo-size-select-small",
	});
}

export default Component;
