import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yssci-bbg.css';
import '../../css/i/igpj62s2p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDrELLdDM"><g class="ft5dv1b6b"><path class="yssci-bbg"/><path class="igpj62s2p"/></g></mask></defs><path mask="url(#SVGDrELLdDM)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:sign-in-squre-duotone-line",
	});
}

export default Component;
