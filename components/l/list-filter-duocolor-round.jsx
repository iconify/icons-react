import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jwvpjsz2r.css';
import '../../css/k/k4qo1xe9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jwvpjsz2r"/><path class="k4qo1xe9v"/></g>`,
		"fallback": "coolicons:list-filter-duocolor-round",
	});
}

export default Component;
