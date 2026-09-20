import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zuymrfbzp.css';
import '../../css/r/reblu44ca.css';
import '../../css/v/v41nt6s4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zuymrfbzp"/><path class="reblu44ca"/><path class="v41nt6s4e"/></g>`,
		"fallback": "tabler:wash-eco",
	});
}

export default Component;
