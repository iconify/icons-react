import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dl-jyul8l.css';
import '../../css/r/rbivm_41c.css';
import '../../css/f/ftovuticq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dl-jyul8l"/><path class="rbivm_41c"/><path class="ftovuticq"/></g>`,
		"fallback": "streamline-flex-color:iron",
	});
}

export default Component;
