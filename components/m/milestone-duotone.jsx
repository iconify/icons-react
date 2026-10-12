import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tov6z6bme.css';
import '../../css/s/sutxs91hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tov6z6bme"/><path class="sutxs91hk"/></g>`,
		"fallback": "lucide-extended:milestone-duotone",
	});
}

export default Component;
