import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hftpl1bgl.css';
import '../../css/l/lq8j-ubmb.css';
import '../../css/a/ay3n_xfrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hftpl1bgl"/><path class="lq8j-ubmb"/><path class="ay3n_xfrp"/>`,
		"fallback": "pixel:robot",
	});
}

export default Component;
