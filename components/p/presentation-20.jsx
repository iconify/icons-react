import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pze-k_dmv.css';
import '../../css/a/ad5vgcley.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pze-k_dmv"/><path class="ad5vgcley"/>`,
		"fallback": "energy-icons:presentation-20",
	});
}

export default Component;
