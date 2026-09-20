import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1qrfw5vg.css';
import '../../css/e/ewwzgm-tj.css';
import '../../css/c/c9rki1f6f.css';
import '../../css/y/yg82avbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1qrfw5vg"/><path class="ewwzgm-tj"/><path class="c9rki1f6f"/><path class="yg82avbjo"/></g>`,
		"fallback": "streamline-freehand-color:media-protection-shield-1",
	});
}

export default Component;
