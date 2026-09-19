import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv_df9bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mv_df9bwf"/>`,
		"fallback": "iconoir:page-right-solid",
	});
}

export default Component;
