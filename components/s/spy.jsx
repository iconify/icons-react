import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tuvtkxb2r.css';
import '../../css/u/uwys18qoa.css';
import '../../css/h/htewx6b8y.css';
import '../../css/l/lpllirfkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tuvtkxb2r wm-k"/><path class="uwys18qoa wm-a"/><path class="htewx6b8y"/><path class="lpllirfkl"/></g>`,
		"fallback": "withicons-bauhaus:spy",
	});
}

export default Component;
