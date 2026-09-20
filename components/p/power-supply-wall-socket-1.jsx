import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zkk8q-b9p.css';
import '../../css/y/yst_ds8tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zkk8q-b9p"/><path class="yst_ds8tn"/></g>`,
		"fallback": "streamline-freehand:power-supply-wall-socket-1",
	});
}

export default Component;
