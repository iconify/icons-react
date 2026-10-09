import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_phe1i7f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_phe1i7f"/>`,
		"fallback": "energy-icons:peak-demand-20",
	});
}

export default Component;
