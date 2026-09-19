import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk8i3emnc.css';
import '../../css/e/erw2gbc2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kk8i3emnc"/><path class="erw2gbc2w"/></g>`,
		"fallback": "icon-park-solid:split-branch",
	});
}

export default Component;
