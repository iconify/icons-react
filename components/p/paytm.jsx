import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dky1fac6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dky1fac6a"/>`,
		"fallback": "thesvg-color:paytm",
	});
}

export default Component;
