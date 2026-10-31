import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hum428eem.css';
import '../../css/x/xd3vbfb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hum428eem"/><path class="xd3vbfb5x"/></g>`,
		"fallback": "coolicons:locate-duotone-round",
	});
}

export default Component;
