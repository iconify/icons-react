import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy0g-ybmj.css';
import '../../css/k/kdt1xvb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zy0g-ybmj"/><path class="kdt1xvb6t"/></g>`,
		"fallback": "lucide:party-popper",
	});
}

export default Component;
