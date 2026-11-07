import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st24108fl.css';
import '../../css/g/gn6fo9ori.css';
import '../../css/p/pqifm1b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st24108fl"/><path class="gn6fo9ori"/><path class="pqifm1b8c"/>`,
		"fallback": "solar:posts-carousel-horizontal-bold",
	});
}

export default Component;
