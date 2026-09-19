import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw6ha2eoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw6ha2eoi"/>`,
		"fallback": "fontisto:skyatlas",
	});
}

export default Component;
