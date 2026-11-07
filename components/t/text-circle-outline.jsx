import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogmp25cex.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogmp25cex"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:text-circle-outline",
	});
}

export default Component;
