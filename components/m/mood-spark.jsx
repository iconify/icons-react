import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-za3f_-f.css';
import '../../css/k/kvlhcmbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-za3f_-f"/><path class="kvlhcmbly"/></g>`,
		"fallback": "tabler:mood-spark",
	});
}

export default Component;
