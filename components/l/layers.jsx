import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj13v5b8d.css';
import '../../css/r/ri499z-mz.css';
import '../../css/x/xkdwwkbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dj13v5b8d"/><path class="ri499z-mz"/><path class="xkdwwkbtt"/></g>`,
		"fallback": "lucide:layers",
	});
}

export default Component;
