import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kywvyf-jq.css';
import '../../css/y/y8am02b7f.css';
import '../../css/m/m0umqsjpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kywvyf-jq"/><path class="y8am02b7f"/><path class="m0umqsjpv"/></g>`,
		"fallback": "withicons-bauhaus:person-swimming",
	});
}

export default Component;
