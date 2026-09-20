import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szbk04d_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szbk04d_r"/>`,
		"fallback": "selfhst:scrob-light",
	});
}

export default Component;
