import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_dl_z0j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp_dl_z0j"/>`,
		"fallback": "pinhead:neutral-face-in-circle",
	});
}

export default Component;
