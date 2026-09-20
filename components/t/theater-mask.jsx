import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y21a1x4xy.css';
import '../../css/b/b845lccxb.css';
import '../../css/m/mxww3nbtd.css';
import '../../css/c/csr-1b26y.css';
import '../../css/v/v1hoilb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="y21a1x4xy"/><path class="b845lccxb"/><path class="mxww3nbtd"/><path class="csr-1b26y"/><path class="v1hoilb-m"/></g>`,
		"fallback": "streamline-plump-color:theater-mask",
	});
}

export default Component;
