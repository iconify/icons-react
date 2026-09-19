import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eie4uo28e.css';
import '../../css/g/gn89h9b-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eie4uo28e"/><path class="gn89h9b-t"/>`,
		"fallback": "ion:ios-download-outline",
	});
}

export default Component;
