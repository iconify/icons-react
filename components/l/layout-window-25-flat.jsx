import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0xlz4b6u.css';
import '../../css/i/idr_-rbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0xlz4b6u"/><path clip-rule="evenodd" class="idr_-rbwv"/></g>`,
		"fallback": "streamline-sharp-color:layout-window-25-flat",
	});
}

export default Component;
