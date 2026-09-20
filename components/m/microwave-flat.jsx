import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qupw3vasz.css';
import '../../css/j/jgvrd8bly.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qupw3vasz"/><path class="jgvrd8bly"/></g>`,
		"fallback": "streamline-color:microwave-flat",
	});
}

export default Component;
