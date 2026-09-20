import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uu_7a4y3p.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/q/qsu9n_98r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uu_7a4y3p"/><circle class="zv6cqnbnp"/><path class="qsu9n_98r"/></g>`,
		"fallback": "lucide:map-pin-minus",
	});
}

export default Component;
