import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzf-e_gbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzf-e_gbc"/>`,
		"fallback": "covid:quarantine-place-bed",
	});
}

export default Component;
