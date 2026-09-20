import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wj-99gbco.css';
import '../../css/z/zz6x5l5er.css';
import '../../css/o/oto99gbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wj-99gbco"/><path clip-rule="evenodd" class="zz6x5l5er"/><path class="oto99gbki"/></g>`,
		"fallback": "streamline-sharp-color:transfer-truck-time-flat",
	});
}

export default Component;
