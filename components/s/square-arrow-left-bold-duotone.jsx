import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1bfxqbht.css';
import '../../css/e/e7qclfbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1bfxqbht"/><path class="e7qclfbiq"/>`,
		"fallback": "solar:square-arrow-left-bold-duotone",
	});
}

export default Component;
