import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iwbjmpb4h.css';
import '../../css/d/d6lqux7jy.css';
import '../../css/j/ju36qx2re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iwbjmpb4h"/><path class="d6lqux7jy"/><path class="ju36qx2re"/></g>`,
		"fallback": "hugeicons:paintbrush-vertical",
	});
}

export default Component;
