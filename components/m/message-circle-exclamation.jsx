import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz5ho4b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz5ho4b6c"/>`,
		"fallback": "tabler:message-circle-exclamation",
	});
}

export default Component;
