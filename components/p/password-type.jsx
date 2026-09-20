import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eo90_nbnk.css';
import '../../css/z/z7apcccjt.css';
import '../../css/g/g15y3hbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eo90_nbnk"/><path class="z7apcccjt"/><path class="g15y3hbeq"/></g>`,
		"fallback": "streamline-freehand-color:password-type",
	});
}

export default Component;
