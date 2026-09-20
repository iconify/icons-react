import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj9owmbzf.css';
import '../../css/a/a-4ue5bby.css';
import '../../css/u/u0kmufbam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj9owmbzf"/><path class="a-4ue5bby"/><circle class="u0kmufbam"/>`,
		"fallback": "selfhst:rurdesk-light",
	});
}

export default Component;
