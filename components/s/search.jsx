import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tooj3i81n.css';
import '../../css/l/l_ghajbbk.css';
import '../../css/j/juh9lepfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="tooj3i81n"/><path class="l_ghajbbk"/><path class="juh9lepfc"/></g>`,
		"fallback": "struq:search",
	});
}

export default Component;
