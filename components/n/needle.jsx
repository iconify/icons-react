import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg6ea-bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg6ea-bsz"/>`,
		"fallback": "mdi:needle",
	});
}

export default Component;
