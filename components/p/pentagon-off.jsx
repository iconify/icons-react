import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivkcne5yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivkcne5yn"/>`,
		"fallback": "tabler:pentagon-off",
	});
}

export default Component;
