import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr9aj_vax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr9aj_vax"/>`,
		"fallback": "energy-icons:paperclip-48",
	});
}

export default Component;
