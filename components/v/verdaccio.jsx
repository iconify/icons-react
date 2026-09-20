import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo7_rqdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo7_rqdf"/>`,
		"fallback": "thesvg-color:verdaccio",
	});
}

export default Component;
