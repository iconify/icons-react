import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zakoj8biy.css';
import '../../css/k/krdjcstrq.css';
import '../../css/m/mnbh4tbmu.css';
import '../../css/i/i3_hlh81p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zakoj8biy"/><path class="krdjcstrq"/><path class="mnbh4tbmu"/><path class="i3_hlh81p"/></g>`,
		"fallback": "streamline-flex-color:projector-board",
	});
}

export default Component;
