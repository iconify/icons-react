import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fr7_e_bvz.css';
import '../../css/z/zicov_bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fr7_e_bvz"/><path class="zicov_bdo"/></g>`,
		"fallback": "streamline-freehand-color:smiley-eyes-only",
	});
}

export default Component;
