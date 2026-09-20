import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikdn4vhmj.css';
import '../../css/b/bk8so5b0y.css';
import '../../css/d/dp1-muq0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikdn4vhmj"/><path class="bk8so5b0y"/><path class="dp1-muq0f"/></g>`,
		"fallback": "streamline-flex-color:user-feedback-heart",
	});
}

export default Component;
