import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs4b4obfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs4b4obfg"/>`,
		"fallback": "selfhst:nitter",
	});
}

export default Component;
