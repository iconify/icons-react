import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpn1mqb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpn1mqb-x"/>`,
		"fallback": "hugeicons:label",
	});
}

export default Component;
