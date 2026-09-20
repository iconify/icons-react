import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_c7mud5f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_c7mud5f"/>`,
		"fallback": "pinhead:parachute",
	});
}

export default Component;
