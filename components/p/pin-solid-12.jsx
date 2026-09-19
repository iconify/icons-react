import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot2q9jb_m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot2q9jb_m"/>`,
		"fallback": "fluent-mdl2:pin-solid-12",
	});
}

export default Component;
