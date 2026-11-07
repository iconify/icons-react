import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2j-9r34n.css';
import '../../css/p/p21ljo36x.css';
import '../../css/u/udrot0b5i.css';
import '../../css/i/i44sm08zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u2j-9r34n"/><path class="p21ljo36x"/><path class="udrot0b5i"/><path class="i44sm08zt"/></g>`,
		"fallback": "solar:transmission-square-linear",
	});
}

export default Component;
