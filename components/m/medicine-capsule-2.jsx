import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usal1bbef.css';
import '../../css/b/bwab5db4f.css';
import '../../css/h/h92mtkbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usal1bbef"/><path class="bwab5db4f"/><path class="h92mtkbuw"/></g>`,
		"fallback": "streamline-cyber-color:medicine-capsule-2",
	});
}

export default Component;
