import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o41_ooc7v.css';
import '../../css/q/qzmgltbcx.css';
import '../../css/e/e3a7k9bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o41_ooc7v"/><path class="qzmgltbcx"/><path class="e3a7k9bmx"/></g>`,
		"fallback": "keyline-icons:music-note-off-sharp-two-tone",
	});
}

export default Component;
