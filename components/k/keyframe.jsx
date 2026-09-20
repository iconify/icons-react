import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0p0e8b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0p0e8b5j"/>`,
		"fallback": "tabler:keyframe",
	});
}

export default Component;
