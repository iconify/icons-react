import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-t05fbzk.css';
import '../../css/e/ep9eimk8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-t05fbzk"/><path class="ep9eimk8q"/></g>`,
		"fallback": "tabler:placeholder",
	});
}

export default Component;
