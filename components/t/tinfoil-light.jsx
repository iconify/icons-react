import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvbcfb3d.css';
import '../../css/x/x_in5db1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvbcfb3d"/><path class="x_in5db1u"/>`,
		"fallback": "selfhst:tinfoil-light",
	});
}

export default Component;
