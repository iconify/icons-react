import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nb6j_obdw.css';
import '../../css/s/sy3bihbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="nb6j_obdw"/><rect class="sy3bihbdp"/></g>`,
		"fallback": "lets-icons:stop-light",
	});
}

export default Component;
