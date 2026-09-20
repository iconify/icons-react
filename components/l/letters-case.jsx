import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqapyabwu.css';
import '../../css/r/rukdu3vsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="dqapyabwu"/><path class="rukdu3vsa"/></g>`,
		"fallback": "tabler:letters-case",
	});
}

export default Component;
