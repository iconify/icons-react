import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cemc4ji5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cemc4ji5s"/>`,
		"fallback": "nrk:media-airplay",
	});
}

export default Component;
