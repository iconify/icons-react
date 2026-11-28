import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rosx4zbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rosx4zbwy"/>`,
		"fallback": "noviair-light:plus-circle",
	});
}

export default Component;
