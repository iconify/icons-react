import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbzz0_v3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbzz0_v3t"/>`,
		"fallback": "thesvg-color:ufc",
	});
}

export default Component;
