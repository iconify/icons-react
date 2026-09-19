import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0j2j0bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0j2j0bak"/>`,
		"fallback": "hugeicons:mic-off-02",
	});
}

export default Component;
