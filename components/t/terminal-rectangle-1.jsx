import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoeuvhbqx.css';
import '../../css/h/hba-f03ki.css';
import '../../css/e/e7_absz6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eoeuvhbqx"/><path class="hba-f03ki"/><path class="e7_absz6o"/></g>`,
		"fallback": "tdesign:terminal-rectangle-1",
	});
}

export default Component;
