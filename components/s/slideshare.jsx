import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl55wk13u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl55wk13u"/>`,
		"fallback": "thesvg-color:slideshare",
	});
}

export default Component;
