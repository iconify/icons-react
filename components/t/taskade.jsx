import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz934u5vg.css';
import '../../css/n/ny4gz8bqt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz934u5vg"/><path class="ny4gz8bqt"/>`,
		"fallback": "devicon:taskade",
	});
}

export default Component;
