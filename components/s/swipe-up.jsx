import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8nhzb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8nhzb_s"/>`,
		"fallback": "tabler:swipe-up",
	});
}

export default Component;
