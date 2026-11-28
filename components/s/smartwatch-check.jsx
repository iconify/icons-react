import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq8g1iq7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq8g1iq7d"/>`,
		"fallback": "noviair:smartwatch-check",
	});
}

export default Component;
