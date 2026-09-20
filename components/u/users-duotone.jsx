import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r6la0c6vv.css';
import '../../css/s/sftxd8wtz.css';
import '../../css/l/l4k2nwwaz.css';
import '../../css/o/ouzepdbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="r6la0c6vv"/><ellipse class="sftxd8wtz"/><circle class="l4k2nwwaz"/><ellipse class="ouzepdbve"/></g>`,
		"fallback": "reicon:users-duotone",
	});
}

export default Component;
