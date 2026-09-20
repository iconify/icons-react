import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm22dhbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm22dhbjp"/>`,
		"fallback": "mdi:table-of-contents",
	});
}

export default Component;
