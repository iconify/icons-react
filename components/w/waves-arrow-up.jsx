import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhu5zrben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhu5zrben"/>`,
		"fallback": "vadivam:waves-arrow-up",
	});
}

export default Component;
