import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sat7ci9ab.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sat7ci9ab"/>`,
		"fallback": "fa6-solid:lira-sign",
	});
}

export default Component;
