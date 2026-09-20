import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elwig4b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elwig4b_s"/>`,
		"fallback": "tabler:motorbike-filled",
	});
}

export default Component;
