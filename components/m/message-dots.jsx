import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etl64wbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etl64wbvi"/>`,
		"fallback": "meteor-icons:message-dots",
	});
}

export default Component;
