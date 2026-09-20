import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/x/x5-o967jz.css';
import '../../css/l/l9ltfkg5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="x5-o967jz"/><path class="l9ltfkg5m"/></g>`,
		"fallback": "si:settings-thick-line",
	});
}

export default Component;
