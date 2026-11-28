import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zoy-x7b7l.css';
import '../../css/k/k3v_7i9yz.css';
import '../../css/v/vj5zhhwof.css';
import '../../css/i/i_in_v1io.css';
import '../../css/x/xf5fvyrdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zoy-x7b7l"/><path class="k3v_7i9yz"/><path class="vj5zhhwof"/><path class="i_in_v1io"/><path class="xf5fvyrdp"/></g>`,
		"fallback": "iconaut:microscope",
	});
}

export default Component;
