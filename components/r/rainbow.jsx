import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n44arpewq.css';
import '../../css/c/c6y59zbkx.css';
import '../../css/z/z7mdej9ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n44arpewq wm-shadow"/><path class="c6y59zbkx wm-shadow"/><path class="z7mdej9ht"/></g>`,
		"fallback": "withicons-brutal:rainbow",
	});
}

export default Component;
