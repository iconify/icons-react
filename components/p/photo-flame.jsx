import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ri5zl1bks.css';
import '../../css/f/fq8vjeb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ri5zl1bks"/><path class="fq8vjeb6n"/></g>`,
		"fallback": "tabler:photo-flame",
	});
}

export default Component;
