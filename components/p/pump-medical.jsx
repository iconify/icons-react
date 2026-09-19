import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpimwccis.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpimwccis"/>`,
		"fallback": "fa6-solid:pump-medical",
	});
}

export default Component;
