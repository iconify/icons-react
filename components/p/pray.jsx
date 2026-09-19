import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_nxgx4a.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1_nxgx4a"/>`,
		"fallback": "fa-solid:pray",
	});
}

export default Component;
