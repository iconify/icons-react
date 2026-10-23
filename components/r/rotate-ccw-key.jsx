import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8w59ycpi.css';
import '../../css/r/rh9nlhvab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w8w59ycpi"/><path class="rh9nlhvab"/></g>`,
		"fallback": "vadivam:rotate-ccw-key",
	});
}

export default Component;
