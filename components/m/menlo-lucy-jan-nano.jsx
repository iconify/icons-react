import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr9n_rb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr9n_rb2n"/>`,
		"fallback": "thesvg:menlo-lucy-jan-nano",
	});
}

export default Component;
