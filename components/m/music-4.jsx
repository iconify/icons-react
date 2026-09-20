import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu7pc9bti.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/d/dqapyabwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu7pc9bti"/><circle class="dos_yhbgg"/><circle class="dqapyabwu"/></g>`,
		"fallback": "lucide:music-4",
	});
}

export default Component;
