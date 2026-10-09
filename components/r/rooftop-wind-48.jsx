import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re15mubga.css';
import '../../css/r/rhjk9ujih.css';
import '../../css/j/jtbcv1bmm.css';
import '../../css/p/pfp2tbb1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re15mubga"/><path class="rhjk9ujih"/><path class="jtbcv1bmm"/><path class="pfp2tbb1y"/>`,
		"fallback": "energy-icons:rooftop-wind-48",
	});
}

export default Component;
