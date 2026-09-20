import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rm9_5bczw.css';
import '../../css/t/t7714n7tf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rm9_5bczw"/><path class="t7714n7tf"/></g>`,
		"fallback": "streamline-flex-color:theater-mask-flat",
	});
}

export default Component;
