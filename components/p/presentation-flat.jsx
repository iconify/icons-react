import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iw6lhybbg.css';
import '../../css/m/mjtf7_btt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iw6lhybbg"/><path class="mjtf7_btt"/></g>`,
		"fallback": "streamline-flex-color:presentation-flat",
	});
}

export default Component;
