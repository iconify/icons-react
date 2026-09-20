import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qxszeo4ga.css';
import '../../css/f/f7299m29s.css';
import '../../css/s/s7z5qybuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qxszeo4ga"/><path class="f7299m29s"/><path class="s7z5qybuj"/></g>`,
		"fallback": "lucide:vegan",
	});
}

export default Component;
