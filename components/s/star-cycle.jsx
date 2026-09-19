import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqev_jbtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqev_jbtc"/>`,
		"fallback": "game-icons:star-cycle",
	});
}

export default Component;
