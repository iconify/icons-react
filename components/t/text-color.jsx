import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw1mfqbad.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw1mfqbad"/>`,
		"fallback": "icomoon-free:text-color",
	});
}

export default Component;
