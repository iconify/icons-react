import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqb529s1o.css';
import '../../css/z/zrjwygnwg.css';
import '../../css/q/qt8z-bb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqb529s1o"/><path class="zrjwygnwg"/><path class="qt8z-bb-s"/>`,
		"fallback": "selfhst:ksuite-kdrive-light",
	});
}

export default Component;
