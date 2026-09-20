import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c3ya03b8q.css';
import '../../css/v/v2jnopb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c3ya03b8q"/><rect class="v2jnopb_g"/></g>`,
		"fallback": "lucide:mic-audio-lines",
	});
}

export default Component;
