import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-uf4cczx.css';
import '../../css/u/uyhdh3buv.css';
import '../../css/c/c6h36fbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w-uf4cczx"/><path class="uyhdh3buv"/><path clip-rule="evenodd" class="c6h36fbzd"/></g>`,
		"fallback": "streamline-freehand-color:video-file-camera",
	});
}

export default Component;
