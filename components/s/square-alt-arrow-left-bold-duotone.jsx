import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1bfxqbht.css';
import '../../css/q/q_szi_b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1bfxqbht"/><path class="q_szi_b3x"/>`,
		"fallback": "solar:square-alt-arrow-left-bold-duotone",
	});
}

export default Component;
