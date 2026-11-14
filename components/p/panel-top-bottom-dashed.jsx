import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyybe2kkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyybe2kkg"/>`,
		"fallback": "hugeicons:panel-top-bottom-dashed",
	});
}

export default Component;
