import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf-o5jypo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf-o5jypo"/>`,
		"fallback": "game-icons:tee-pipe",
	});
}

export default Component;
