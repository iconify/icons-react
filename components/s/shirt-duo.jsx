import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tt2fcx0hz.css';
import '../../css/w/w_97-qb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tt2fcx0hz"/><path class="w_97-qb7a"/></g>`,
		"fallback": "withicons:shirt-duo",
	});
}

export default Component;
