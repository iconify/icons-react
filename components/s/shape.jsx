import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrqf1xbrp.css';
import '../../css/k/kne6ghv2k.css';
import '../../css/n/n1lfo308a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wrqf1xbrp"/><path class="kne6ghv2k"/><path class="n1lfo308a"/></g>`,
		"fallback": "andrsrxn:shape",
	});
}

export default Component;
