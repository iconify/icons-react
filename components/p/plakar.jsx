import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2zp5lmjm.css';
import '../../css/s/sx1z59bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2zp5lmjm"/><path class="sx1z59bsv"/>`,
		"fallback": "selfhst:plakar",
	});
}

export default Component;
