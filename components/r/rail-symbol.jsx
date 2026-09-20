import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd9u0ph8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd9u0ph8a"/>`,
		"fallback": "lucide:rail-symbol",
	});
}

export default Component;
