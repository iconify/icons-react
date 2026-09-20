import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hjgg_8bwx.css';
import '../../css/u/ucevwil0r.css';
import '../../css/f/ft2_tf_mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hjgg_8bwx"/><path class="ucevwil0r"/><path class="ft2_tf_mg"/></g>`,
		"fallback": "streamline-freehand:locker-room-wash-hands",
	});
}

export default Component;
