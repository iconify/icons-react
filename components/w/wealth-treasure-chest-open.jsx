import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o-0s74bqa.css';
import '../../css/l/l6hbmybvh.css';
import '../../css/o/o9d9mccyf.css';
import '../../css/c/ca9jddbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o-0s74bqa"/><path class="l6hbmybvh"/><path class="o9d9mccyf"/><path class="ca9jddbuc"/></g>`,
		"fallback": "streamline-freehand-color:wealth-treasure-chest-open",
	});
}

export default Component;
