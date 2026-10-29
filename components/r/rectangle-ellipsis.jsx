import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xw_me4vft.css';
import '../../css/g/g2qaiez3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xw_me4vft"/><path class="g2qaiez3p wm-a"/></g>`,
		"fallback": "withicons:rectangle-ellipsis",
	});
}

export default Component;
