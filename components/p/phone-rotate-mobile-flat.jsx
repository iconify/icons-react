import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dro7awbqn.css';
import '../../css/u/u3t0ve4mj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dro7awbqn"/><path clip-rule="evenodd" class="u3t0ve4mj"/></g>`,
		"fallback": "streamline-flex-color:phone-rotate-mobile-flat",
	});
}

export default Component;
