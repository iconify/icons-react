import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni3s1zbnp.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni3s1zbnp"/>`,
		"fallback": "fa6-solid:mercury",
	});
}

export default Component;
