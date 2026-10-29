import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9xrs4alz.css';
import '../../css/p/pp76qbckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n9xrs4alz"/><path class="pp76qbckp"/></g>`,
		"fallback": "withicons:table-duo",
	});
}

export default Component;
