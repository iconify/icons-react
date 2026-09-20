import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0xlz4b6u.css';
import '../../css/g/gg8b5-b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0xlz4b6u"/><path clip-rule="evenodd" class="gg8b5-b6f"/></g>`,
		"fallback": "streamline-sharp-color:layout-window-2-flat",
	});
}

export default Component;
