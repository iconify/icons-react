import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6d6n-_oa.css';
import '../../css/u/usc_ctb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="r6d6n-_oa"/><path class="usc_ctb7h"/></g>`,
		"fallback": "lucide:tablet-smartphone",
	});
}

export default Component;
