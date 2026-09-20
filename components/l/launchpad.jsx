import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgc_kyikd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgc_kyikd"/>`,
		"fallback": "thesvg:launchpad",
	});
}

export default Component;
