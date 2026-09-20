import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa_5deg5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa_5deg5s"/>`,
		"fallback": "mdi:upload-lock-outline",
	});
}

export default Component;
