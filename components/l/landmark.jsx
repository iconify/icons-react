import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hise5gb9x.css';
import '../../css/b/bktrjnn5f.css';
import '../../css/v/vv4lo6b2m.css';
import '../../css/n/nvwd6n36m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hise5gb9x"/><path class="bktrjnn5f"/><path class="vv4lo6b2m"/><path class="nvwd6n36m"/></g>`,
		"fallback": "iconaut:landmark",
	});
}

export default Component;
