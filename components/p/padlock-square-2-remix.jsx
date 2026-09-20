import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pem9t_bvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pem9t_bvh"/>`,
		"fallback": "streamline-plump:padlock-square-2-remix",
	});
}

export default Component;
