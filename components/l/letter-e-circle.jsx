import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxzi_ye4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxzi_ye4p"/>`,
		"fallback": "pixelarticons:letter-e-circle",
	});
}

export default Component;
