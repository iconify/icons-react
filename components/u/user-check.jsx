import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/i48n9wbdl.css';
import '../../css/n/ntqfozbki.css';
import '../../css/l/li06vcqvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="i48n9wbdl"/><path class="ntqfozbki"/><path class="li06vcqvc"/></g>`,
		"fallback": "matita:user-check",
	});
}

export default Component;
