import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/scnak0aak.css';
import '../../css/y/ytd1ty3sp.css';
import '../../css/v/vt9yw3war.css';
import '../../css/d/daais313j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="scnak0aak"/><path class="ytd1ty3sp"/></g><path class="vt9yw3war"/><path class="daais313j"/></g>`,
		"fallback": "solar:layers-minimalistic-bold-duotone",
	});
}

export default Component;
