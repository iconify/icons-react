import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6s_mu8dx.css';
import '../../css/e/e7oqqbbmp.css';
import '../../css/x/xmpm2dmjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6s_mu8dx"/><path class="e7oqqbbmp"/><path class="xmpm2dmjb"/></g>`,
		"fallback": "streamline-kameleon-color:photo-file-2-pop",
	});
}

export default Component;
