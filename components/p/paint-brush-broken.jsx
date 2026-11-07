import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msp13vg8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msp13vg8f"/>`,
		"fallback": "solar:paint-brush-broken",
	});
}

export default Component;
