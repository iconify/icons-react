import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu9nf7cwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu9nf7cwk"/>`,
		"fallback": "withicons:switch-camera-gloss",
	});
}

export default Component;
