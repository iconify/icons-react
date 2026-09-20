import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4q04908s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4q04908s"/>`,
		"fallback": "teenyicons:users-outline",
	});
}

export default Component;
