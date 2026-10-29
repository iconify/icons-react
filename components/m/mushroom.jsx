import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzv9h4bes.css';
import '../../css/n/nsrfhnewv.css';
import '../../css/c/cxo62_b3f.css';
import '../../css/t/tccumkb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nzv9h4bes"/><path class="nsrfhnewv"/><path class="cxo62_b3f"/><path class="tccumkb6l"/></g>`,
		"fallback": "withicons-bauhaus:mushroom",
	});
}

export default Component;
