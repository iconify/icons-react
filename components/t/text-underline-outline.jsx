import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_uvt8bwv.css';
import '../../css/m/mdftclbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_uvt8bwv"/><path class="mdftclbuh"/>`,
		"fallback": "solar:text-underline-outline",
	});
}

export default Component;
