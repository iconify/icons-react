import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixjkhbszw.css';
import '../../css/l/lvp3cpbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixjkhbszw"/><path class="lvp3cpbur"/>`,
		"fallback": "solar:text-underline-bold-duotone",
	});
}

export default Component;
