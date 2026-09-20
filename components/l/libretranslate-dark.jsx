import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly4bitb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly4bitb3r"/>`,
		"fallback": "selfhst:libretranslate-dark",
	});
}

export default Component;
