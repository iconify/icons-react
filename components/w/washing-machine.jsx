import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-fabub4t.css';
import '../../css/m/mg6f8q7ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-fabub4t"/><path class="mg6f8q7ac"/></g>`,
		"fallback": "vadivam:washing-machine",
	});
}

export default Component;
