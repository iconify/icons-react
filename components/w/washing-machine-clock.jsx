import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t55a15lpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t55a15lpx"/>`,
		"fallback": "noviair:washing-machine-clock",
	});
}

export default Component;
