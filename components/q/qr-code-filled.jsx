import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a92_184ww.css';
import '../../css/m/miymqckna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a92_184ww"/><path class="miymqckna"/>`,
		"fallback": "bitcoin-icons:qr-code-filled",
	});
}

export default Component;
