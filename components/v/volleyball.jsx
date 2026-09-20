import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj-63-b_b.css';
import '../../css/a/a8u5y1wor.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dj-63-b_b"/><path class="a8u5y1wor"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "lucide:volleyball",
	});
}

export default Component;
