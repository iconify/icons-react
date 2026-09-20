import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_a97_3xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_a97_3xv"/>`,
		"fallback": "ix:reference-point-bottom-left",
	});
}

export default Component;
