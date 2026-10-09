import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9p4n1_lf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9p4n1_lf"/>`,
		"fallback": "energy-icons:panel-cleaning-20",
	});
}

export default Component;
