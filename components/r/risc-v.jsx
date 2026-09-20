import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-1zhdc2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-1zhdc2d"/>`,
		"fallback": "thesvg:risc-v",
	});
}

export default Component;
