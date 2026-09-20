import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/i5z0-zbni.css';
import '../../css/q/q9hglwx5e.css';
import '../../css/g/g9w6hg7_i.css';
import '../../css/x/x_sh1cbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="i5z0-zbni"/><path class="q9hglwx5e"/><path class="g9w6hg7_i"/><path class="x_sh1cbwo"/></g>`,
		"fallback": "streamline-sharp-color:password-block",
	});
}

export default Component;
