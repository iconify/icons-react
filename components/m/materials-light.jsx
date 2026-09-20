import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g-o3_4ixm.css';
import '../../css/t/tvs0_y9tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="g-o3_4ixm"/><path class="tvs0_y9tl"/></g>`,
		"fallback": "lets-icons:materials-light",
	});
}

export default Component;
