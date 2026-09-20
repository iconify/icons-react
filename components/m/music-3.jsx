import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oruz1_utz.css';
import '../../css/r/r7ywcbbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="oruz1_utz"/><path class="r7ywcbbwk"/></g>`,
		"fallback": "lucide:music-3",
	});
}

export default Component;
