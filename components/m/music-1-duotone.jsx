import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tje8mb0vx.css';
import '../../css/u/u-6_p02jg.css';
import '../../css/n/n98jbmb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="tje8mb0vx"/><circle class="u-6_p02jg"/><path class="n98jbmb2a"/></g>`,
		"fallback": "iconamoon:music-1-duotone",
	});
}

export default Component;
