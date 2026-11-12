import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idfkpkbuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idfkpkbuf"/>`,
		"fallback": "selfhst:kwsx-radio-light",
	});
}

export default Component;
