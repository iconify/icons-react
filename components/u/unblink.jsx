import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkjeh0b9q.css';
import '../../css/w/wlr-0lgaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkjeh0b9q"/><path class="wlr-0lgaj"/>`,
		"fallback": "selfhst:unblink",
	});
}

export default Component;
