import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsf_iqb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsf_iqb4k"/>`,
		"fallback": "ri:poker-diamonds-line",
	});
}

export default Component;
