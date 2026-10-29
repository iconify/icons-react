import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lx2-ubcjc.css';
import '../../css/g/g2qaiez3p.css';
import '../../css/x/xw_me4vft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lx2-ubcjc"/><path class="g2qaiez3p wm-a"/><path class="xw_me4vft"/></g>`,
		"fallback": "withicons:rectangle-ellipsis-duo",
	});
}

export default Component;
