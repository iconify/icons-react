import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyy18ib3e.css';
import '../../css/h/h5emsl81x.css';
import '../../css/a/ay4nvtb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyy18ib3e"/><path class="h5emsl81x"/><path class="ay4nvtb8a"/>`,
		"fallback": "prime:sign-in",
	});
}

export default Component;
