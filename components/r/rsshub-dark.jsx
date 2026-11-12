import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dir6rysvf.css';
import '../../css/a/ab03k5swc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dir6rysvf"/><path class="ab03k5swc"/>`,
		"fallback": "selfhst:rsshub-dark",
	});
}

export default Component;
