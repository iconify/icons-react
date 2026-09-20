import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_brxd2on.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_brxd2on"/>`,
		"fallback": "streamline-color:ladder",
	});
}

export default Component;
