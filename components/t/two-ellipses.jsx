import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/si4stbq1w.css';
import '../../css/f/f0xzcwbul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="si4stbq1w"/><path class="f0xzcwbul"/></g>`,
		"fallback": "icon-park:two-ellipses",
	});
}

export default Component;
