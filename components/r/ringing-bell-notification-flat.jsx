import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7c7wxb3o.css';
import '../../css/v/v9547bren.css';
import '../../css/r/r8nxz-9ft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x7c7wxb3o"/><path class="v9547bren"/><path clip-rule="evenodd" class="r8nxz-9ft"/></g>`,
		"fallback": "streamline-plump-color:ringing-bell-notification-flat",
	});
}

export default Component;
