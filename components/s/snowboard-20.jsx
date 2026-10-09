import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-kx1bbug.css';
import '../../css/s/s-tqsqm8s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-kx1bbug"/><path class="s-tqsqm8s"/>`,
		"fallback": "energy-icons:snowboard-20",
	});
}

export default Component;
