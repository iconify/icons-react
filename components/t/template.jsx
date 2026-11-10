import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g108xvvfa.css';
import '../../css/n/nhu8-jbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g108xvvfa"/><path class="nhu8-jbzk"/></g>`,
		"fallback": "andrsrxn:template",
	});
}

export default Component;
