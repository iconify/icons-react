import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/we-4enbxy.css';
import '../../css/p/pvh9yzklw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="we-4enbxy"/><path class="pvh9yzklw"/></g>`,
		"fallback": "lucide:sticky-note-x",
	});
}

export default Component;
