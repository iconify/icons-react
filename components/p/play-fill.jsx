import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_i_bww8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_i_bww8z"/>`,
		"fallback": "grommet-icons:play-fill",
	});
}

export default Component;
