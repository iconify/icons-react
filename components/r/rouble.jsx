import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3sxunm-d.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3sxunm-d"/>`,
		"fallback": "fontisto:rouble",
	});
}

export default Component;
