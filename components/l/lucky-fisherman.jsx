import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw7n_3bxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw7n_3bxg"/>`,
		"fallback": "game-icons:lucky-fisherman",
	});
}

export default Component;
