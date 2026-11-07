import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0stl6voo.css';
import '../../css/h/hcm7vlw8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0stl6voo"/><path class="hcm7vlw8d"/>`,
		"fallback": "solar:undo-left-bold-duotone",
	});
}

export default Component;
