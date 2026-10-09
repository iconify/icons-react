import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgepkba3y.css';
import '../../css/x/xcmsnjb3t.css';
import '../../css/y/yfrlinbim.css';
import '../../css/m/mw0z8ac3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgepkba3y"/><path class="xcmsnjb3t"/><path class="yfrlinbim"/><path class="mw0z8ac3w"/>`,
		"fallback": "energy-icons:radiator-valve-20",
	});
}

export default Component;
