import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dehze7bnb.css';
import '../../css/y/yj3jxrb_r.css';
import '../../css/g/ga02vw0-t.css';
import '../../css/h/hj7_en79e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dehze7bnb"/><path class="yj3jxrb_r"/><path class="ga02vw0-t"/><path class="hj7_en79e"/></g>`,
		"fallback": "streamline-cyber-color:mobile-phone-check",
	});
}

export default Component;
