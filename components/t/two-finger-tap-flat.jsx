import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4thw9bxj.css';
import '../../css/c/cxv6c5rlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h4thw9bxj"/><path class="cxv6c5rlj"/></g>`,
		"fallback": "streamline-sharp-color:two-finger-tap-flat",
	});
}

export default Component;
