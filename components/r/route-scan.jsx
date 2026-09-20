import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8nb84bfn.css';
import '../../css/t/tklu6wn7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8nb84bfn"/><path class="tklu6wn7r"/></g>`,
		"fallback": "tabler:route-scan",
	});
}

export default Component;
