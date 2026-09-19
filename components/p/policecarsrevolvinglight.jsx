import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1wnbiriq.css';
import '../../css/c/cmgycubke.css';
import '../../css/f/f4khvma_r.css';
import '../../css/l/lzo6wlb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1wnbiriq"/><path class="cmgycubke"/><ellipse class="f4khvma_r"/><path class="lzo6wlb2r"/>`,
		"fallback": "fxemoji:policecarsrevolvinglight",
	});
}

export default Component;
