import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzk20bw8j.css';

const viewBox = {"width":1025,"height":770};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzk20bw8j"/>`,
		"fallback": "whh:panorama",
	});
}

export default Component;
