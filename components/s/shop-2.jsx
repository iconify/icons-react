import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojrm5vb_s.css';
import '../../css/s/stjhr4b3l.css';
import '../../css/b/b3elz1bwm.css';
import '../../css/d/dx71a6bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojrm5vb_s"/><path class="stjhr4b3l"/><path class="b3elz1bwm"/><path class="dx71a6bhj"/></g>`,
		"fallback": "tdesign:shop-2",
	});
}

export default Component;
