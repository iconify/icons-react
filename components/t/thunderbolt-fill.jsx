import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu8nhg2df.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu8nhg2df"/>`,
		"fallback": "bi:thunderbolt-fill",
	});
}

export default Component;
