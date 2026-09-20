import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6kj1gvby.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/n/n6w939bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o6kj1gvby"/><path class="hn7lp_bzn"/><path class="n6w939bna"/></g>`,
		"fallback": "tabler:photo-bolt",
	});
}

export default Component;
