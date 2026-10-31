import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zidurqb5h.css';
import '../../css/q/qxpwn7b3x.css';
import '../../css/b/b9qxjx8ah.css';
import '../../css/m/mnhzo2btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zidurqb5h"/><path class="qxpwn7b3x wm-shadow"/><path class="b9qxjx8ah"/><path class="mnhzo2btb"/></g>`,
		"fallback": "withicons-brutal:reply",
	});
}

export default Component;
