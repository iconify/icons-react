import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaamibb9x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaamibb9x"/>`,
		"fallback": "fluent-mdl2:view-list",
	});
}

export default Component;
