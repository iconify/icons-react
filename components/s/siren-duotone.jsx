import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y7sqe_bvd.css';
import '../../css/z/zusgepdhq.css';
import '../../css/g/gjyn-2b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y7sqe_bvd"/><path clip-rule="evenodd" class="zusgepdhq"/><path class="gjyn-2b-e"/></g>`,
		"fallback": "keyline-icons:siren-duotone",
	});
}

export default Component;
