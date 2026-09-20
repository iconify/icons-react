import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bozyds5yg.css';
import '../../css/u/um-klob-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bozyds5yg"/><path class="um-klob-b"/></g>`,
		"fallback": "streamline-ultimate:monitor-download",
	});
}

export default Component;
