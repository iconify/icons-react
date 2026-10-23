import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/agd_zkb-s.css';
import '../../css/f/fbeg4p18s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="agd_zkb-s"/><path class="fbeg4p18s"/></g>`,
		"fallback": "vadivam:lasso",
	});
}

export default Component;
