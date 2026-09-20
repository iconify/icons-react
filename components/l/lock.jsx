import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xc5-8jbpq.css';
import '../../css/d/d83vv7bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="xc5-8jbpq"/><path class="d83vv7bvj"/></g>`,
		"fallback": "lucide:lock",
	});
}

export default Component;
