import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtakl83bo.css';
import '../../css/c/cap2omi-v.css';
import '../../css/t/t682zr9oq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtakl83bo"/><path class="cap2omi-v"/><path class="t682zr9oq"/>`,
		"fallback": "selfhst:onlyoffice-dark",
	});
}

export default Component;
