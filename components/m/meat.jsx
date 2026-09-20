import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c_f2gdcnm.css';
import '../../css/b/brxi1sgah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c_f2gdcnm"/><path class="brxi1sgah"/></g>`,
		"fallback": "tabler:meat",
	});
}

export default Component;
