import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_tqzxbbs.css';
import '../../css/d/dp4lw14sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_tqzxbbs"/><path class="dp4lw14sb"/>`,
		"fallback": "bxs:sticker",
	});
}

export default Component;
