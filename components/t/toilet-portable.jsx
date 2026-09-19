import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvfa7b5d.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvfa7b5d"/>`,
		"fallback": "fa6-solid:toilet-portable",
	});
}

export default Component;
