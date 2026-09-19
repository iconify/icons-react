import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwds4g5lo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwds4g5lo"/>`,
		"fallback": "fa7-solid:reply-all",
	});
}

export default Component;
