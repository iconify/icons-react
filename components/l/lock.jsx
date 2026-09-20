import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvd_t7aci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvd_t7aci"/>`,
		"fallback": "mage:lock",
	});
}

export default Component;
