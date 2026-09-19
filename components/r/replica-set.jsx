import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhrg354jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhrg354jm"/>`,
		"fallback": "eos-icons:replica-set",
	});
}

export default Component;
