import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6jbv-bsq.css';
import '../../css/t/tvn_kseps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6jbv-bsq"/><path class="tvn_kseps"/>`,
		"fallback": "streamline-ultimate:single-woman-home-bold",
	});
}

export default Component;
