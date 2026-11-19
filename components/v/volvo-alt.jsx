import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfjwb4fga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfjwb4fga"/>`,
		"fallback": "cbi:volvo-alt",
	});
}

export default Component;
