import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk-pp3bfw.css';
import '../../css/f/f3zm4_bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk-pp3bfw"/><path class="f3zm4_bki"/>`,
		"fallback": "boxicons:torus",
	});
}

export default Component;
