import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkesrtb_l.css';
import '../../css/i/im-_dl6ti.css';
import '../../css/w/wo35n__ww.css';
import '../../css/w/wykp-20vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkesrtb_l"/><path class="im-_dl6ti"/><path class="wo35n__ww"/><path class="wykp-20vj"/></g>`,
		"fallback": "streamline-freehand-color:mobile-phone-smartphone",
	});
}

export default Component;
