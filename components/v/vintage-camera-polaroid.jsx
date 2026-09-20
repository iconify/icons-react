import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5cnzkdgo.css';
import '../../css/i/ixm-vyfiv.css';
import '../../css/z/z-lbqwn6z.css';
import '../../css/z/zaky8j-5w.css';
import '../../css/u/un419_fij.css';
import '../../css/w/wayhapbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5cnzkdgo"/><path class="ixm-vyfiv"/><path class="z-lbqwn6z"/><path class="zaky8j-5w"/><path class="un419_fij"/><path class="wayhapbeu"/></g>`,
		"fallback": "streamline-freehand-color:vintage-camera-polaroid",
	});
}

export default Component;
