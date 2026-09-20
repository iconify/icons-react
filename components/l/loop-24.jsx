import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k55cu9bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k55cu9bsv"/>`,
		"fallback": "octicon:loop-24",
	});
}

export default Component;
