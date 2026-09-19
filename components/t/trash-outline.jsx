import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/g0z7_2box.css';
import '../../css/s/snovo3mvt.css';
import '../../css/y/ybsaw8b7c.css';
import '../../css/t/t293k54ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="g0z7_2box"/><path class="snovo3mvt"/><path class="ybsaw8b7c"/><path class="t293k54ns"/></g>`,
		"fallback": "bitcoin-icons:trash-outline",
	});
}

export default Component;
