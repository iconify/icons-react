import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rws7fccvp.css';
import '../../css/f/fl5ge85lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rws7fccvp"/><circle class="fl5ge85lc"/></g>`,
		"fallback": "lucide:list-clock",
	});
}

export default Component;
