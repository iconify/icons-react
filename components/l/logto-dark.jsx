import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8nfsfvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba8nfsfvj"/>`,
		"fallback": "selfhst:logto-dark",
	});
}

export default Component;
