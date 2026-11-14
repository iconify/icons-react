import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xo5wf044s.css';
import '../../css/i/ibt8-_bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xo5wf044s"/><path class="ibt8-_bdu"/></g>`,
		"fallback": "hugeicons:video-ai",
	});
}

export default Component;
