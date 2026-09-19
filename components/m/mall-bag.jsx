import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zeb2u5bnn.css';
import '../../css/d/da5c6acvy.css';
import '../../css/r/rfi36zaxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="zeb2u5bnn"/><path class="da5c6acvy"/><path class="rfi36zaxv"/></g>`,
		"fallback": "icon-park:mall-bag",
	});
}

export default Component;
