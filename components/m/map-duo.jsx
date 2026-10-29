import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b7kyjwrad.css';
import '../../css/p/p2z9olxff.css';
import '../../css/e/eoiz0rolg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b7kyjwrad"/><path class="p2z9olxff wm-a"/><path class="eoiz0rolg"/></g>`,
		"fallback": "withicons:map-duo",
	});
}

export default Component;
