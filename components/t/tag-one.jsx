import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhe6s1-3o.css';
import '../../css/n/nxvn3unym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhe6s1-3o"/><path clip-rule="evenodd" class="nxvn3unym"/></g>`,
		"fallback": "icon-park-outline:tag-one",
	});
}

export default Component;
