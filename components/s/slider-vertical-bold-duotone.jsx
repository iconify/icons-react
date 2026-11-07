import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nspy78boe.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jejndwbfp.css';
import '../../css/x/xpb82nibn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nspy78boe"/><g class="xtpeb-edw"><path class="jejndwbfp"/><path class="xpb82nibn"/></g>`,
		"fallback": "solar:slider-vertical-bold-duotone",
	});
}

export default Component;
