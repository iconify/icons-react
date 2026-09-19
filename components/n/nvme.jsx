import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/leyi7sfho.css';
import '../../css/o/ovpn6ti1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="leyi7sfho"/><path class="ovpn6ti1j"/></g>`,
		"fallback": "bi:nvme",
	});
}

export default Component;
