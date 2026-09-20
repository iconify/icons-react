import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4s9m1b2j.css';
import '../../css/i/i5pb2cb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t4s9m1b2j"/><circle class="i5pb2cb6i"/></g>`,
		"fallback": "lucide:metronome",
	});
}

export default Component;
