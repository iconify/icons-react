import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksjm_nbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksjm_nbrt"/>`,
		"fallback": "ri:slideshow-fill",
	});
}

export default Component;
