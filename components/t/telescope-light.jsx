import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy_ggab6j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy_ggab6j"/>`,
		"fallback": "pullo:telescope-light",
	});
}

export default Component;
