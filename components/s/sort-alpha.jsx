import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovdxgn82n.css';
import '../../css/k/kx5990bkx.css';
import '../../css/h/h90hn10hd.css';
import '../../css/p/px8lbe_8y.css';
import '../../css/z/zt04ngbfi.css';
import '../../css/z/z_6ozs7ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ovdxgn82n wm-k"/><path class="kx5990bkx wm-k"/><path class="h90hn10hd wm-k"/><path class="px8lbe_8y wm-a"/><path class="wm-a zt04ngbfi"/><path class="wm-a z_6ozs7ha"/></g>`,
		"fallback": "withicons-anime:sort-alpha",
	});
}

export default Component;
