import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go-j6fb6y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go-j6fb6y"/>`,
		"fallback": "fa6-solid:pills",
	});
}

export default Component;
