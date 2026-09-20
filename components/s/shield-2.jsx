import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kioxskbtd.css';
import '../../css/p/p51pl9b2k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kioxskbtd"/><path class="p51pl9b2k"/></g>`,
		"fallback": "streamline-flex-color:shield-2",
	});
}

export default Component;
