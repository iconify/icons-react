import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bz9fltisp.css';
import '../../css/l/l-vrekmuv.css';
import '../../css/y/ytopibb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bz9fltisp"/><path class="l-vrekmuv"/><circle class="ytopibb5c"/></g>`,
		"fallback": "lucide:university",
	});
}

export default Component;
