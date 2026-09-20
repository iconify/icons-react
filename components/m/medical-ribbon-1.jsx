import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g6dth7vnu.css';
import '../../css/n/n6xcip3fo.css';
import '../../css/s/s-xk2tf2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="g6dth7vnu"/><path class="n6xcip3fo"/><path class="s-xk2tf2z"/></g>`,
		"fallback": "streamline-sharp-color:medical-ribbon-1",
	});
}

export default Component;
