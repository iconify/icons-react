import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amn23owsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amn23owsc"/>`,
		"fallback": "noviair:smart-home-lock",
	});
}

export default Component;
