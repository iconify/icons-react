import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n0gwuybdo.css';
import '../../css/v/v6exm6bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n0gwuybdo"/><path class="v6exm6bcq"/></g>`,
		"fallback": "coolicons:waveform-sparkle-duocolor-round",
	});
}

export default Component;
