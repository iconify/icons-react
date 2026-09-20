import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf6l_pbah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf6l_pbah"/>`,
		"fallback": "selfhst:pgadmin-light",
	});
}

export default Component;
