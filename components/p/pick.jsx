import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cp-4pwl9w.css';
import '../../css/h/hm7utob4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cp-4pwl9w"/><path class="hm7utob4g"/></g>`,
		"fallback": "tabler:pick",
	});
}

export default Component;
