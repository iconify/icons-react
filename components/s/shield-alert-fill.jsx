import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-wru_mwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-wru_mwv"/>`,
		"fallback": "si:shield-alert-fill",
	});
}

export default Component;
