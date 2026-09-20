import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/feamolb4d.css';
import '../../css/g/gp23u-b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="feamolb4d"/><path class="gp23u-b7u"/></g>`,
		"fallback": "tabler:prism",
	});
}

export default Component;
