import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cip6asb1p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cip6asb1p"/>`,
		"fallback": "fluent-mdl2:temporary-user",
	});
}

export default Component;
