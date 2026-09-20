import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re_gkwr9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re_gkwr9d"/>`,
		"fallback": "ri:swap-box-line",
	});
}

export default Component;
