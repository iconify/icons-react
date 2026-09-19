import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w35a9ksvv.css';
import '../../css/s/s0wvueb0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w35a9ksvv"/><path clip-rule="evenodd" class="s0wvueb0a"/></g>`,
		"fallback": "icon-park:tag-one",
	});
}

export default Component;
