import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/n-cck-b2m.css';
import '../../css/o/oh-afpbaq.css';
import '../../css/s/s4_1x1qva.css';
import '../../css/n/n73pe7car.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="n-cck-b2m"/><path class="oh-afpbaq"/><path class="s4_1x1qva"/><path class="n73pe7car"/></g>`,
		"fallback": "streamline-sharp-color:investing-and-banking",
	});
}

export default Component;
