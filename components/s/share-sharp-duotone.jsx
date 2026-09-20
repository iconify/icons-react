import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h0f6r6bye.css';
import '../../css/c/c8km_cwfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h0f6r6bye"/><path class="c8km_cwfm"/></g>`,
		"fallback": "keyline-icons:share-sharp-duotone",
	});
}

export default Component;
