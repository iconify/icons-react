import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h5t_h2bku.css';
import '../../css/s/s8benwb9y.css';
import '../../css/w/w37drss5a.css';
import '../../css/r/r9io6ibem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h5t_h2bku"/><path class="s8benwb9y"/><path class="w37drss5a"/><path class="r9io6ibem"/></g>`,
		"fallback": "solar:watch-round-line-duotone",
	});
}

export default Component;
