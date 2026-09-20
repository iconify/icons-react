import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ye3wqyb1x.css';
import '../../css/s/sm7_bzb8m.css';
import '../../css/n/nqfsodb3k.css';
import '../../css/a/az22wsfsd.css';
import '../../css/k/kfn5c6bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ye3wqyb1x"/><path class="sm7_bzb8m"/><path class="nqfsodb3k"/><path class="az22wsfsd"/><path class="kfn5c6bim"/></g>`,
		"fallback": "streamline-freehand-color:strategy-target-center-phone",
	});
}

export default Component;
