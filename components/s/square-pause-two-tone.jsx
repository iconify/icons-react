import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4yt2i7xs.css';
import '../../css/k/kw294vebg.css';
import '../../css/c/cvru1isjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="kw294vebg"/><path class="cvru1isjg"/></g>`,
		"fallback": "keyline-icons:square-pause-two-tone",
	});
}

export default Component;
