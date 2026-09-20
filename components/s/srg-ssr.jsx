import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cro202h0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cro202h0c"/>`,
		"fallback": "thesvg:srg-ssr",
	});
}

export default Component;
