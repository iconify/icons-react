import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7xghib3z.css';
import '../../css/v/vj_a13g5b.css';
import '../../css/c/cpp7jvb2k.css';
import '../../css/w/wc4n8bbbu.css';
import '../../css/q/q4hmgyfpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r7xghib3z"/><path class="vj_a13g5b"/><path class="cpp7jvb2k"/><path class="wc4n8bbbu"/><path class="q4hmgyfpv"/></g>`,
		"fallback": "streamline-ultimate-color:temperature-thermometer-up",
	});
}

export default Component;
