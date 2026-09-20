import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9ofgyb2j.css';
import '../../css/p/phwbtjn9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9ofgyb2j"/><path class="phwbtjn9t"/></g>`,
		"fallback": "solar:plain-linear",
	});
}

export default Component;
