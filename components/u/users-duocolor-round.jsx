import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sinucbbfo.css';
import '../../css/j/jodp59bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sinucbbfo"/><path class="jodp59bzf"/></g>`,
		"fallback": "coolicons:users-duocolor-round",
	});
}

export default Component;
