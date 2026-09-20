import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgrj4e4gu.css';
import '../../css/x/xpheglbff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgrj4e4gu"/><path class="xpheglbff"/>`,
		"fallback": "selfhst:koito",
	});
}

export default Component;
