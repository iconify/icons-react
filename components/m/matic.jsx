import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtno_eb0u.css';
import '../../css/h/hiu23vr6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vtno_eb0u"/><path class="hiu23vr6x"/></g>`,
		"fallback": "cryptocurrency-color:matic",
	});
}

export default Component;
