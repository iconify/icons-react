import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fhtg3yvaf.css';
import '../../css/s/snw-wz_1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fhtg3yvaf"/><path class="snw-wz_1m"/></g>`,
		"fallback": "tabler:photo-ai",
	});
}

export default Component;
