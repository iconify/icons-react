import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw006larm.css';
import '../../css/f/fiyc44jpu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw006larm"/><path class="fiyc44jpu"/>`,
		"fallback": "devicon:junie-wordmark",
	});
}

export default Component;
