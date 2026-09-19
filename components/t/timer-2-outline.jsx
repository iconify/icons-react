import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nz41hjbhh.css';
import '../../css/o/os6iakbao.css';
import '../../css/m/mces9ir0s.css';
import '../../css/q/qaew_5b7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nz41hjbhh"/><path class="os6iakbao"/><path class="mces9ir0s"/><path class="qaew_5b7f"/></g>`,
		"fallback": "glyphs:timer-2-outline",
	});
}

export default Component;
