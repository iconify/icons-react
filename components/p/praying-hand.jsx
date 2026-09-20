import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oq3h-vbzn.css';
import '../../css/c/c07-ede5k.css';
import '../../css/p/p9l-rac5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oq3h-vbzn"/><path class="c07-ede5k"/><path class="p9l-rac5w"/></g>`,
		"fallback": "streamline:praying-hand",
	});
}

export default Component;
