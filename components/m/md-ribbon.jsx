import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzj803jut.css';
import '../../css/s/s4_r7ab8r.css';
import '../../css/n/nk949cczd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzj803jut"/><path class="s4_r7ab8r"/><path class="nk949cczd"/>`,
		"fallback": "ion:md-ribbon",
	});
}

export default Component;
