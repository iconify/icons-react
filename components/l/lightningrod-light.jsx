import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5x6prmfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5x6prmfv"/>`,
		"fallback": "selfhst:lightningrod-light",
	});
}

export default Component;
