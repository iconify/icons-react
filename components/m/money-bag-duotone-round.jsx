import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwh6a7bki.css';
import '../../css/q/q3i4wbcok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zwh6a7bki"/><path class="q3i4wbcok"/></g>`,
		"fallback": "coolicons:money-bag-duotone-round",
	});
}

export default Component;
