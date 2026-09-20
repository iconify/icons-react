import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjz_aczh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnjz_aczh"/>`,
		"fallback": "keyline-icons:sunset-sharp-fill",
	});
}

export default Component;
