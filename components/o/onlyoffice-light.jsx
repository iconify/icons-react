import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8n0vpbri.css';
import '../../css/a/apu5ltb_q.css';
import '../../css/i/i49k2acdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8n0vpbri"/><path class="apu5ltb_q"/><path class="i49k2acdw"/>`,
		"fallback": "selfhst:onlyoffice-light",
	});
}

export default Component;
