import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2hndvn1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2hndvn1z"/>`,
		"fallback": "noviair:thermostat",
	});
}

export default Component;
