import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipo4v_b4w.css';
import '../../css/m/mngh2w-cy.css';
import '../../css/q/qr-5js_2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipo4v_b4w"/><path class="mngh2w-cy"/><path class="qr-5js_2c"/>`,
		"fallback": "selfhst:ksuite-kchat-dark",
	});
}

export default Component;
