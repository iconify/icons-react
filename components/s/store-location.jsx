import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cpy7c9ber.css';
import '../../css/f/flmz8db-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cpy7c9ber"/><path class="flmz8db-q"/></g>`,
		"fallback": "streamline-cyber:store-location",
	});
}

export default Component;
