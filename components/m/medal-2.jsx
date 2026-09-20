import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wthx01bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wthx01bhn"/>`,
		"fallback": "tabler:medal-2",
	});
}

export default Component;
