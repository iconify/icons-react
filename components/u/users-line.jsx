import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbykosn1t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbykosn1t"/>`,
		"fallback": "fa6-solid:users-line",
	});
}

export default Component;
