import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3xa-ib0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3xa-ib0h"/>`,
		"fallback": "thesvg:steelseries",
	});
}

export default Component;
