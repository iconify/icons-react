import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw7ruzy2e.css';
import '../../css/a/ay63a2o9s.css';
import '../../css/n/nqlosb-6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw7ruzy2e"/><path class="ay63a2o9s"/><path class="nqlosb-6t"/>`,
		"fallback": "streamline-freehand:retouch-saturation",
	});
}

export default Component;
