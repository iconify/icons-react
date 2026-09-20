import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdsy2ybwq.css';
import '../../css/e/ei9rd5b8i.css';
import '../../css/q/qt8z-bb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdsy2ybwq"/><path class="ei9rd5b8i"/><path class="qt8z-bb-s"/>`,
		"fallback": "selfhst:ksuite-kdrive-light",
	});
}

export default Component;
