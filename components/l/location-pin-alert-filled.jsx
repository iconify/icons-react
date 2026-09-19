import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etj1eqbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etj1eqbup"/>`,
		"fallback": "griddy-icons:location-pin-alert-filled",
	});
}

export default Component;
