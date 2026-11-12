import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feh17ircu.css';
import '../../css/v/v6phkq3ir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="feh17ircu"/><path class="v6phkq3ir"/>`,
		"fallback": "selfhst:journiv",
	});
}

export default Component;
