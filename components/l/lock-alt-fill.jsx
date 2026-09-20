import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cefjig1hz.css';
import '../../css/q/qkqs85bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cefjig1hz"/><path class="qkqs85bvp"/></g>`,
		"fallback": "lets-icons:lock-alt-fill",
	});
}

export default Component;
