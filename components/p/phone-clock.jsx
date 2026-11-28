import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eik6_sx3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eik6_sx3r"/>`,
		"fallback": "noviair-light:phone-clock",
	});
}

export default Component;
