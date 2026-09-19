import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikgv0kb3e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikgv0kb3e"/>`,
		"fallback": "fluent-mdl2:provisioning-package",
	});
}

export default Component;
