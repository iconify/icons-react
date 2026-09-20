import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9sbrvuos.css';
import '../../css/l/lb9wnv3nq.css';
import '../../css/d/dho87mbca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f9sbrvuos"/><path clip-rule="evenodd" class="lb9wnv3nq"/><path class="dho87mbca"/></g>`,
		"fallback": "streamline-color:radio-flat",
	});
}

export default Component;
