import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar5ayubfo.css';
import '../../css/y/y_ddozifd.css';
import '../../css/d/dpk6_3b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ar5ayubfo"/><rect class="y_ddozifd"/><path class="dpk6_3b7k"/></g>`,
		"fallback": "meteor-icons:paint-roller",
	});
}

export default Component;
