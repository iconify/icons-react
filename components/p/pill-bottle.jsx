import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ochkgfbbu.css';
import '../../css/u/ubbtkbahf.css';
import '../../css/l/llcqigbrs.css';
import '../../css/j/jgq9-g7_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ochkgfbbu wm-k"/><path class="ubbtkbahf wm-a"/><path class="llcqigbrs wm-k"/><path class="jgq9-g7_y"/></g>`,
		"fallback": "withicons-bauhaus:pill-bottle",
	});
}

export default Component;
