import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyrin2kcm.css';
import '../../css/g/gzdlvdbrh.css';
import '../../css/o/ow6krzbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyrin2kcm"/><path class="gzdlvdbrh"/><path class="ow6krzbfa"/></g>`,
		"fallback": "streamline-freehand-color:smiley-happy",
	});
}

export default Component;
