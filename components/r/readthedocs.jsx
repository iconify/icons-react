import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_k8d7bal.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_k8d7bal"/>`,
		"fallback": "devicon:readthedocs",
	});
}

export default Component;
