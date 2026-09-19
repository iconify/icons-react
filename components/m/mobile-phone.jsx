import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naijlbc7x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naijlbc7x"/>`,
		"fallback": "fa7-solid:mobile-phone",
	});
}

export default Component;
