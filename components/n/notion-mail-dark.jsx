import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq52vybza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq52vybza"/>`,
		"fallback": "selfhst:notion-mail-dark",
	});
}

export default Component;
