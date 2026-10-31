import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zthl6hb2x.css';
import '../../css/w/whvp4qbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zthl6hb2x"/><path class="whvp4qbfp"/></g>`,
		"fallback": "coolicons:waveform-sparkle-duotone-round",
	});
}

export default Component;
