import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9q6tdb0r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9q6tdb0r"/>`,
		"fallback": "fa6-solid:sheet-plastic",
	});
}

export default Component;
