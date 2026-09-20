import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shw5dwbgv.css';
import '../../css/u/u9zmojb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shw5dwbgv"/><path class="u9zmojb0f"/>`,
		"fallback": "selfhst:sharkord-dark",
	});
}

export default Component;
