import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwwpoi3_a.css';
import '../../css/x/x-x_tvbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nwwpoi3_a"/><path class="x-x_tvbhr"/></g>`,
		"fallback": "coolicons:thumbs-up-duocolor-round",
	});
}

export default Component;
