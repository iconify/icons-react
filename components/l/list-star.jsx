import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywgouyb4s.css';
import '../../css/t/tt0x9wblw.css';
import '../../css/g/gwpwbacem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywgouyb4s"/><path class="tt0x9wblw"/><path class="gwpwbacem"/></g>`,
		"fallback": "andrsrxn:list-star",
	});
}

export default Component;
