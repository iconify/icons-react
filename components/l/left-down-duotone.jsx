import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwbvoi8sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwbvoi8sn"/>`,
		"fallback": "si:left-down-duotone",
	});
}

export default Component;
