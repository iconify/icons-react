import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g3hq8ccro.css';
import '../../css/h/hw0a4dbvi.css';
import '../../css/j/jqrxswsfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g3hq8ccro"/><path class="hw0a4dbvi"/><path class="jqrxswsfo"/></g>`,
		"fallback": "streamline-sharp-color:sizing",
	});
}

export default Component;
