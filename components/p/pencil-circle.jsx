import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/h0ebrdd5k.css';
import '../../css/f/fdhomzbdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="h0ebrdd5k"/><path class="fdhomzbdh"/></g>`,
		"fallback": "streamline-plump:pencil-circle",
	});
}

export default Component;
