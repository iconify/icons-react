import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_7c1ju0s.css';
import '../../css/e/egq7xs-ks.css';
import '../../css/o/og_9js9al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b_7c1ju0s"/><path class="egq7xs-ks"/><circle class="og_9js9al"/></g>`,
		"fallback": "lucide:route-arrow-right",
	});
}

export default Component;
