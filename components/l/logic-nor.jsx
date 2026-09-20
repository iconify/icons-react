import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4nn6ue7a.css';
import '../../css/h/h0im107ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h4nn6ue7a"/><path class="h0im107ld"/></g>`,
		"fallback": "tabler:logic-nor",
	});
}

export default Component;
