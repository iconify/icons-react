import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjs5d_nch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjs5d_nch"/>`,
		"fallback": "keyline-icons:triangle-alert-sharp-fill",
	});
}

export default Component;
