import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aonepje_a.css';
import '../../css/h/h0wavjb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aonepje_a"/><path class="h0wavjb7c"/>`,
		"fallback": "selfhst:prosody",
	});
}

export default Component;
