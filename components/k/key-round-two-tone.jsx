import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y67v7dbbm.css';
import '../../css/h/h0544ee1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y67v7dbbm"/><path class="h0544ee1r"/></g>`,
		"fallback": "keyline-icons:key-round-two-tone",
	});
}

export default Component;
