import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw54qac6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw54qac6s"/>`,
		"fallback": "si:unlock-line",
	});
}

export default Component;
