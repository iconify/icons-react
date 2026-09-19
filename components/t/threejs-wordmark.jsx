import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1ju-bpp.css';
import '../../css/g/gn7jhi5kh.css';
import '../../css/j/jvodmxq9q.css';
import '../../css/q/q0ifr8ahi.css';
import '../../css/e/e-fhcwqwr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk1ju-bpp"/><path class="gn7jhi5kh"/><path class="jvodmxq9q"/><path class="q0ifr8ahi"/><path class="e-fhcwqwr"/>`,
		"fallback": "devicon:threejs-wordmark",
	});
}

export default Component;
