import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxyna-beg.css';
import '../../css/g/gr-g1kq_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxyna-beg"/><path class="gr-g1kq_m"/>`,
		"fallback": "energy-icons:tide-low-48",
	});
}

export default Component;
