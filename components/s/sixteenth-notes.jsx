import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdgv94bgu.css';
import '../../css/d/dqapyabwu.css';
import '../../css/t/tke4h5b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hdgv94bgu"/><circle class="dqapyabwu"/><circle class="tke4h5b0x"/></g>`,
		"fallback": "lucide:sixteenth-notes",
	});
}

export default Component;
