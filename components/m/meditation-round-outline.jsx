import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvvf-pbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yvvf-pbvi"/>`,
		"fallback": "solar:meditation-round-outline",
	});
}

export default Component;
