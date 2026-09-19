import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mghf9sskg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mghf9sskg"/>`,
		"fallback": "cbi:target",
	});
}

export default Component;
