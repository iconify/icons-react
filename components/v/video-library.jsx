import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwi7ak1nz.css';
import '../../css/h/hjd4hrb9v.css';
import '../../css/l/lf8zclbve.css';
import '../../css/u/unv7mgqkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uwi7ak1nz"/><path class="hjd4hrb9v"/><path class="lf8zclbve"/><path class="unv7mgqkd"/></g>`,
		"fallback": "tdesign:video-library",
	});
}

export default Component;
