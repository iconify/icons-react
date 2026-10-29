import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x20tc-cns.css';
import '../../css/p/phym4_hso.css';
import '../../css/n/n1i2vsblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x20tc-cns"/><path class="phym4_hso wm-a"/><path class="n1i2vsblu wm-s"/></g>`,
		"fallback": "withicons:user-lock-solid",
	});
}

export default Component;
