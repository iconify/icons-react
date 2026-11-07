import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eipxycc0p.css';
import '../../css/l/lvp3cpbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eipxycc0p"/><path class="lvp3cpbur"/>`,
		"fallback": "solar:text-underline-bold",
	});
}

export default Component;
