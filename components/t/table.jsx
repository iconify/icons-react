import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/secxfh3kc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secxfh3kc"/>`,
		"fallback": "fa6-solid:table",
	});
}

export default Component;
