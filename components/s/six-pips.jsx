import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0pww9bel.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0pww9bel"/>`,
		"fallback": "pinhead:six-pips",
	});
}

export default Component;
