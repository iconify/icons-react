import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz69n3bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz69n3bit"/>`,
		"fallback": "tabler:shadow-off",
	});
}

export default Component;
