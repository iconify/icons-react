import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp49xnb5l.css';
import '../../css/w/wln7u9w6d.css';
import '../../css/d/d45omcbyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hp49xnb5l"/><path class="wln7u9w6d"/><path class="d45omcbyd"/>`,
		"fallback": "selfhst:snapcast",
	});
}

export default Component;
