import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/m/mx8qzubgz.css';
import '../../css/e/eljct9bgn.css';
import '../../css/f/f4dapabmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="mx8qzubgz"/><path class="eljct9bgn"/><path class="f4dapabmw"/></g>`,
		"fallback": "icon-park:round-socket",
	});
}

export default Component;
