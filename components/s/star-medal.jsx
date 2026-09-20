import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/efypg13vt.css';
import '../../css/s/s7dh9tb4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="efypg13vt"/><path class="s7dh9tb4c"/></g>`,
		"fallback": "streamline-plump:star-medal",
	});
}

export default Component;
