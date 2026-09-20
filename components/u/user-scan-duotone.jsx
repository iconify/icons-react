import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urz-4cihd.css';
import '../../css/j/j3iqtac1n.css';
import '../../css/v/vo_vnys1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="urz-4cihd"/><path clip-rule="evenodd" class="j3iqtac1n"/><path class="vo_vnys1f"/></g>`,
		"fallback": "lets-icons:user-scan-duotone",
	});
}

export default Component;
