import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjlo9pbii.css';
import '../../css/e/egewqt8ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vjlo9pbii"/><path clip-rule="evenodd" class="egewqt8ho"/></g>`,
		"fallback": "solar:medical-kit-bold",
	});
}

export default Component;
