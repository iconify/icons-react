import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc_d3616n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc_d3616n"/>`,
		"fallback": "thesvg-color:mcdonald-s",
	});
}

export default Component;
