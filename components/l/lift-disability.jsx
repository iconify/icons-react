import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctd9pz-6t.css';
import '../../css/o/orhsnwbov.css';
import '../../css/a/awsc9pb4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ctd9pz-6t"/><path class="orhsnwbov"/><path class="awsc9pb4z"/></g>`,
		"fallback": "streamline-color:lift-disability",
	});
}

export default Component;
