import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biu8trvyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biu8trvyv"/>`,
		"fallback": "selfhst:oxynote",
	});
}

export default Component;
