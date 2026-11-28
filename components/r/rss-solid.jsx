import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj07_abtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj07_abtj"/>`,
		"fallback": "iconaut:rss-solid",
	});
}

export default Component;
