import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es10opblc.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es10opblc"/>`,
		"fallback": "fontisto:pinterest",
	});
}

export default Component;
