import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj6rg4i6l.css';
import '../../css/t/tvnt_1b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="oj6rg4i6l"/><path class="tvnt_1b-x"/></g>`,
		"fallback": "meteor-icons:tv",
	});
}

export default Component;
