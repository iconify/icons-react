import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqrvzwb8p.css';
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
		"content": `<g class="fqrvzwb8p"><rect class="nb6j_obdw"/><rect class="sy3bihbdp"/></g>`,
		"fallback": "lets-icons:stop-duotone",
	});
}

export default Component;
