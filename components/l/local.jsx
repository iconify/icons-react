import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nqwhu1s7a.css';
import '../../css/o/ox6d5w6du.css';
import '../../css/t/tq2sis96r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="nqwhu1s7a"/><path class="ox6d5w6du"/><path class="tq2sis96r"/></g>`,
		"fallback": "icon-park:local",
	});
}

export default Component;
