import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hndqxpo_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hndqxpo_w"/>`,
		"fallback": "cbi:oura-o",
	});
}

export default Component;
