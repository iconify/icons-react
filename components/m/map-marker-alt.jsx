import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3r9zcxcg.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3r9zcxcg"/>`,
		"fallback": "fontisto:map-marker-alt",
	});
}

export default Component;
