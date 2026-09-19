import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs2w-lbzi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs2w-lbzi"/>`,
		"fallback": "gis:layer-up",
	});
}

export default Component;
