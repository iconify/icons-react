import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-58qssej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-58qssej"/>`,
		"fallback": "tabler:number-71-small",
	});
}

export default Component;
