import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew0ia5buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ew0ia5buq"/>`,
		"fallback": "streamline-freehand:read-email-target",
	});
}

export default Component;
