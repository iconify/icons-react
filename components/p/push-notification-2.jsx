import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh2y6xbeo.css';
import '../../css/y/yx6kzzz_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh2y6xbeo"/><path class="yx6kzzz_d"/>`,
		"fallback": "streamline-freehand:push-notification-2",
	});
}

export default Component;
