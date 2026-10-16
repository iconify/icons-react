import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0k19hilo.css';
import '../../css/p/ps9svrb0r.css';
import '../../css/n/niyv1hwum.css';
import '../../css/r/rj41gebbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0k19hilo"/><path class="ps9svrb0r"/><path class="niyv1hwum"/><path class="rj41gebbz"/>`,
		"fallback": "energy-icons:shovel-48-bold",
	});
}

export default Component;
