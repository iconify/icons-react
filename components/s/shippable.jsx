import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc0n45fmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc0n45fmc"/>`,
		"fallback": "file-icons:shippable",
	});
}

export default Component;
