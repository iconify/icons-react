import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq9hgpdsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq9hgpdsp"/>`,
		"fallback": "ix:surveillance-filled",
	});
}

export default Component;
