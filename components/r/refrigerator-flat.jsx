import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa1-jbcbc.css';
import '../../css/t/tg05lba0t.css';
import '../../css/q/qtekbtbjg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fa1-jbcbc"/><path class="tg05lba0t"/><path class="qtekbtbjg"/></g>`,
		"fallback": "streamline-color:refrigerator-flat",
	});
}

export default Component;
