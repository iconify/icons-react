import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/o/ooils_6oo.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/k/k5amzmb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="ooils_6oo"/><path class="no4wsvg0e"/><path class="k5amzmb8s"/></g>`,
		"fallback": "tdesign:tools-circle",
	});
}

export default Component;
