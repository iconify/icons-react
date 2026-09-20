import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmf6dbc6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmf6dbc6c"/>`,
		"fallback": "mynaui:mobile-signal-one",
	});
}

export default Component;
