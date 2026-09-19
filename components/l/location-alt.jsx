import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imsy5jbgi.css';
import '../../css/h/hgn2g5biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imsy5jbgi"/><path class="hgn2g5biv"/>`,
		"fallback": "boxicons:location-alt",
	});
}

export default Component;
