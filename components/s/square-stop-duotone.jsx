import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4yt2i7xs.css';
import '../../css/h/htcgw4bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="htcgw4bju"/></g>`,
		"fallback": "keyline-icons:square-stop-duotone",
	});
}

export default Component;
