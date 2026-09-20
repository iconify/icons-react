import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avk2_4bfb.css';
import '../../css/a/a3ft8x4kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="avk2_4bfb"/><path class="a3ft8x4kw"/></g>`,
		"fallback": "tabler:mood-pin",
	});
}

export default Component;
