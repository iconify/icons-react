import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/of6hjdkhf.css';
import '../../css/h/hp4er4c7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="of6hjdkhf"/><path class="hp4er4c7s"/></g>`,
		"fallback": "streamline-sharp-color:shopping-basket-2",
	});
}

export default Component;
