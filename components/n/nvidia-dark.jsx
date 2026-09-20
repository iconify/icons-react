import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjz_tdl7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjz_tdl7k"/>`,
		"fallback": "selfhst:nvidia-dark",
	});
}

export default Component;
