import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ym0k3ab2z.css';
import '../../css/v/vj_3vlsjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ym0k3ab2z"/><path class="vj_3vlsjo"/></g>`,
		"fallback": "hugeicons:server-stack-02",
	});
}

export default Component;
