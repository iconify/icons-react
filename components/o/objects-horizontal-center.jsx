import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jib_m7btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jib_m7btj"/>`,
		"fallback": "bxs:objects-horizontal-center",
	});
}

export default Component;
