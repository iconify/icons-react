import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfl8bdbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfl8bdbyr"/>`,
		"fallback": "noviair-light:sd-card-x",
	});
}

export default Component;
