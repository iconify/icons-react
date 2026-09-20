import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/d/dawcsab1j.css';
import '../../css/z/zd5rsov2e.css';
import '../../css/x/xl6e-cvow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="dawcsab1j"/><path class="zd5rsov2e"/><path class="xl6e-cvow"/></g>`,
		"fallback": "si:target-line",
	});
}

export default Component;
