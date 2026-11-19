import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahe22obps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahe22obps"/>`,
		"fallback": "cbi:netflix",
	});
}

export default Component;
