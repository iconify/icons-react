import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi2zi-93x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi2zi-93x"/>`,
		"fallback": "cbi:oura-o",
	});
}

export default Component;
