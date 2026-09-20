import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hia--8b1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hia--8b1t"/>`,
		"fallback": "lsicon:warehouse-filled",
	});
}

export default Component;
