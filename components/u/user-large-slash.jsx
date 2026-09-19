import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aafiethsx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aafiethsx"/>`,
		"fallback": "fa6-solid:user-large-slash",
	});
}

export default Component;
