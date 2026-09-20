import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abql3zbgy.css';
import '../../css/s/sqe3p6fhr.css';
import '../../css/g/gm_9k9b0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="abql3zbgy"/><path class="sqe3p6fhr"/><path clip-rule="evenodd" class="gm_9k9b0e"/></g>`,
		"fallback": "streamline-plump-color:speaker-2-flat",
	});
}

export default Component;
