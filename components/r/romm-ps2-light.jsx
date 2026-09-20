import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfxilfbuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfxilfbuf"/>`,
		"fallback": "selfhst:romm-ps2-light",
	});
}

export default Component;
