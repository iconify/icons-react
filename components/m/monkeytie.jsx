import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvy7w-nir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvy7w-nir"/>`,
		"fallback": "simple-icons:monkeytie",
	});
}

export default Component;
