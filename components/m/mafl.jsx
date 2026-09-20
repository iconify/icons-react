import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsexc3bhu.css';
import '../../css/n/n2tq17b1d.css';
import '../../css/w/wwnp4dbvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsexc3bhu"/><path class="n2tq17b1d"/><path class="wwnp4dbvx"/>`,
		"fallback": "selfhst:mafl",
	});
}

export default Component;
