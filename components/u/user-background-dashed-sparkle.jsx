import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4oba6bzs.css';
import '../../css/q/qofjcfbxt.css';
import '../../css/l/lts-c-4mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4oba6bzs"/><path class="qofjcfbxt"/><path class="lts-c-4mj"/></g>`,
		"fallback": "andrsrxn:user-background-dashed-sparkle",
	});
}

export default Component;
