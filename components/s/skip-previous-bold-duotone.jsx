import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dygia2sgr.css';
import '../../css/h/hbuiv42xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dygia2sgr"/><path class="hbuiv42xj"/>`,
		"fallback": "solar:skip-previous-bold-duotone",
	});
}

export default Component;
