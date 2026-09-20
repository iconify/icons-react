import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_kvtnbmk.css';
import '../../css/u/u3aficb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_kvtnbmk"/><path class="u3aficb1b"/>`,
		"fallback": "si:sign-out-fill",
	});
}

export default Component;
