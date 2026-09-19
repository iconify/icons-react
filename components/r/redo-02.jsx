import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wpwn3u12l.css';
import '../../css/o/og-2dg1xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wpwn3u12l"/><path class="og-2dg1xu"/></g>`,
		"fallback": "hugeicons:redo-02",
	});
}

export default Component;
