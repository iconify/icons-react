import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q919pubya.css';
import '../../css/e/epbp3tnvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q919pubya"/><path class="epbp3tnvv"/>`,
		"fallback": "eva:pin-fill",
	});
}

export default Component;
