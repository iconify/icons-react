import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt8b9db9w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt8b9db9w"/>`,
		"fallback": "gis:move-alt",
	});
}

export default Component;
