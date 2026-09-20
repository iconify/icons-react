import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2rj0nmor.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y2rj0nmor"/><circle class="zv6cqnbnp"/><circle class="ez1x61b2a"/></g>`,
		"fallback": "lucide:map-pin-search",
	});
}

export default Component;
