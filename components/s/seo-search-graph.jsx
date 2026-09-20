import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ak2naptub.css';
import '../../css/p/pqga2m1vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ak2naptub"/><path class="pqga2m1vq"/></g>`,
		"fallback": "streamline-freehand:seo-search-graph",
	});
}

export default Component;
