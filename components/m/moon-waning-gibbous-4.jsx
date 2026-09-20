import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl-bsbz7w.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl-bsbz7w"/>`,
		"fallback": "wi:moon-waning-gibbous-4",
	});
}

export default Component;
