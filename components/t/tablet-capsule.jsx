import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tukskel3t.css';
import '../../css/m/m8rngub2e.css';
import '../../css/b/bqe9d_bjc.css';
import '../../css/l/lssxrha5a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tukskel3t"/><path clip-rule="evenodd" class="m8rngub2e"/><path class="bqe9d_bjc"/><path class="lssxrha5a"/></g>`,
		"fallback": "streamline-flex-color:tablet-capsule",
	});
}

export default Component;
