import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lll-uetsu.css';
import '../../css/o/ovjw8ab9k.css';
import '../../css/i/ibejhacsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lll-uetsu"/><path class="ovjw8ab9k"/><path class="ibejhacsy"/></g>`,
		"fallback": "streamline-logos:open-access-logo",
	});
}

export default Component;
