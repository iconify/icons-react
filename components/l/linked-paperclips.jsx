import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti92cbmei.css';
import '../../css/y/y_g29ma4v.css';
import '../../css/e/e_ttht3ap.css';
import '../../css/m/m56q2cczf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ti92cbmei"/><path class="y_g29ma4v"/><path class="e_ttht3ap"/><path class="m56q2cczf"/></g>`,
		"fallback": "fluent-emoji-flat:linked-paperclips",
	});
}

export default Component;
