import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfkx1ubzo.css';
import '../../css/w/wq8x2ubgv.css';
import '../../css/w/wge49ob4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cfkx1ubzo"/><circle class="wq8x2ubgv"/><path class="wge49ob4x"/>`,
		"fallback": "eva:speaker-fill",
	});
}

export default Component;
