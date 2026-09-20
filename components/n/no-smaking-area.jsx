import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/ajvx-ubxz.css';
import '../../css/h/hb5i_2bff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ajvx-ubxz"/><path class="hb5i_2bff"/></g>`,
		"fallback": "streamline-plump:no-smaking-area",
	});
}

export default Component;
