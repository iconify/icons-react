import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qjv144bhu.css';
import '../../css/h/htd-6b90f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qjv144bhu"/><path class="htd-6b90f"/></g>`,
		"fallback": "icon-park:text-rotation-none",
	});
}

export default Component;
