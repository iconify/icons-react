import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cqjyyx-9n.css';
import '../../css/w/we_rndblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cqjyyx-9n"/><path class="we_rndblf"/></g>`,
		"fallback": "sidekickicons:mask",
	});
}

export default Component;
