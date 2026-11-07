import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk5kasbyr.css';
import '../../css/i/idnpklgal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk5kasbyr"/><path class="idnpklgal"/>`,
		"fallback": "solar:transfer-vertical-bold",
	});
}

export default Component;
