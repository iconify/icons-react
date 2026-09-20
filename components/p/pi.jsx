import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aknv7ibxi.css';
import '../../css/u/um8zde66c.css';
import '../../css/v/vsnwok-ma.css';
import '../../css/w/w3zx75mym.css';
import '../../css/k/kq-b_9b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aknv7ibxi"/><path class="um8zde66c"/><path class="vsnwok-ma"/><path class="w3zx75mym"/><path class="kq-b_9b7g"/>`,
		"fallback": "token:pi",
	});
}

export default Component;
