import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbhmqig1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbhmqig1h"/>`,
		"fallback": "meteor-icons:wave-square",
	});
}

export default Component;
