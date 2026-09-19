import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp8eo214r.css';
import '../../css/g/gjjbcefqf.css';
import '../../css/a/a4rohjb8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp8eo214r"/><path class="gjjbcefqf"/><path class="a4rohjb8w"/>`,
		"fallback": "fxemoji:rightspeaker3soundwaves",
	});
}

export default Component;
