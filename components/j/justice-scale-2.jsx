import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n5x-jvblw.css';
import '../../css/x/xyvw3dbaq.css';
import '../../css/q/qjx5r3b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n5x-jvblw"/><path class="xyvw3dbaq"/><path class="qjx5r3b7l"/></g>`,
		"fallback": "streamline-sharp-color:justice-scale-2",
	});
}

export default Component;
