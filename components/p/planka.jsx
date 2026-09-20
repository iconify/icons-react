import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm2otvbdc.css';
import '../../css/i/icw3oacuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm2otvbdc"/><path class="icw3oacuy"/>`,
		"fallback": "selfhst:planka",
	});
}

export default Component;
