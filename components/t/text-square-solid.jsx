import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8ul3vxjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k8ul3vxjh"/>`,
		"fallback": "iconoir:text-square-solid",
	});
}

export default Component;
