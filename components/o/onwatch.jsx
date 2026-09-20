import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faxt378lm.css';
import '../../css/e/ezv3-gbwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="faxt378lm"/><path class="ezv3-gbwk"/>`,
		"fallback": "selfhst:onwatch",
	});
}

export default Component;
