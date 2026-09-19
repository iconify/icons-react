import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5p2qw7vu.css';
import '../../css/c/ci51xnbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5p2qw7vu"/><path class="ci51xnbvl"/>`,
		"fallback": "boxicons:speaker",
	});
}

export default Component;
