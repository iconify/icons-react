import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrc0wxb6i.css';
import '../../css/f/f2m41mplo.css';
import '../../css/h/h4g-2-v3f.css';
import '../../css/b/blsybkbrn.css';
import '../../css/m/mfwy7tbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k wrc0wxb6i"/><path class="f2m41mplo wm-k"/><path class="h4g-2-v3f wm-k"/><path class="blsybkbrn wm-shine"/><path class="mfwy7tbsd wm-k"/></g>`,
		"fallback": "withicons-anime:volleyball",
	});
}

export default Component;
