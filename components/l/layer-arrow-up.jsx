import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx7q22b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx7q22b_f"/>`,
		"fallback": "lucide:layer-arrow-up",
	});
}

export default Component;
