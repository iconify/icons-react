import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4yt2i7xs.css';
import '../../css/k/kw294vebg.css';
import '../../css/k/k1uktu2et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="kw294vebg"/><path class="k1uktu2et"/></g>`,
		"fallback": "keyline-icons:square-play-two-tone",
	});
}

export default Component;
