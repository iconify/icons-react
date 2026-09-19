import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5f5msbrf.css';
import '../../css/d/dx3032ngj.css';
import '../../css/i/ibbuc4bji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5f5msbrf"/><path class="dx3032ngj"/><path class="ibbuc4bji"/>`,
		"fallback": "fxemoji:performingarts",
	});
}

export default Component;
