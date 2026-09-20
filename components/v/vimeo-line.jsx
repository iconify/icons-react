import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm11tmb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm11tmb1a"/>`,
		"fallback": "ri:vimeo-line",
	});
}

export default Component;
