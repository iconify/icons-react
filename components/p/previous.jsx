import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ot0mcdb4i.css';
import '../../css/x/xhe4r4naa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ot0mcdb4i"/><path class="xhe4r4naa"/></g>`,
		"fallback": "tdesign:previous",
	});
}

export default Component;
