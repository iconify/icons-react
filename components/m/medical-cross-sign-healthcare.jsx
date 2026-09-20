import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp_eg0b7d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp_eg0b7d"/>`,
		"fallback": "streamline:medical-cross-sign-healthcare",
	});
}

export default Component;
