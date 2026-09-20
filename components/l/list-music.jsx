import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rea7h29_j.css';
import '../../css/d/dqapyabwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rea7h29_j"/><circle class="dqapyabwu"/></g>`,
		"fallback": "lucide:list-music",
	});
}

export default Component;
