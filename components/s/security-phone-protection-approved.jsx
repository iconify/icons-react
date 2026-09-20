import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jh4yr-bek.css';
import '../../css/k/k84w4tbfp.css';
import '../../css/b/bibk8bb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jh4yr-bek"/><path class="k84w4tbfp"/><path class="bibk8bb1u"/></g>`,
		"fallback": "streamline-freehand-color:security-phone-protection-approved",
	});
}

export default Component;
