import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_tg6mnbe.css';
import '../../css/z/zp7sorr7x.css';
import '../../css/c/chhunf30z.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeN1KycjP"><g class="ft5dv1b6b"><path class="h_tg6mnbe"/><path class="zp7sorr7x"/><circle class="chhunf30z"/></g></mask></defs><path mask="url(#SVGeN1KycjP)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:pin-alt-duotone",
	});
}

export default Component;
