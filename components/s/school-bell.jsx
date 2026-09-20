import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxony1ant.css';
import '../../css/g/g_5-efcuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxony1ant"/><path class="g_5-efcuw"/></g>`,
		"fallback": "tabler:school-bell",
	});
}

export default Component;
