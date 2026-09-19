import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_y8qb2o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw_y8qb2o"/>`,
		"fallback": "catppuccin:moonwave",
	});
}

export default Component;
