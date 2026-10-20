import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b381prbzq.css';
import '../../css/s/slbg-zbbp.css';
import '../../css/o/oputujbyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b381prbzq"/><path class="slbg-zbbp"/><path class="oputujbyf"/>`,
		"fallback": "energy-icons:letter-spacing-48",
	});
}

export default Component;
