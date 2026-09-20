import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoswc34or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoswc34or"/>`,
		"fallback": "weui:volume-up-outlined",
	});
}

export default Component;
