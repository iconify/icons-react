import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7c1udmws.css';
import '../../css/t/twz87puxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7c1udmws"/><path clip-rule="evenodd" class="twz87puxk"/>`,
		"fallback": "qlementine-icons:pedal-outlines-16",
	});
}

export default Component;
