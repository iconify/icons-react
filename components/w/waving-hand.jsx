import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oexdz7q-w.css';
import '../../css/j/j4x6ayb4o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oexdz7q-w"/><path class="j4x6ayb4o"/></g>`,
		"fallback": "streamline:waving-hand",
	});
}

export default Component;
