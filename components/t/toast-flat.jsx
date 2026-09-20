import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8rb29f4a.css';
import '../../css/y/y997vp8tt.css';
import '../../css/g/gbf8mw6rv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8rb29f4a"/><path clip-rule="evenodd" class="y997vp8tt"/><path clip-rule="evenodd" class="gbf8mw6rv"/></g>`,
		"fallback": "streamline-plump-color:toast-flat",
	});
}

export default Component;
