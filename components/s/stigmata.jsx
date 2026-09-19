import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfecfcb4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfecfcb4w"/>`,
		"fallback": "game-icons:stigmata",
	});
}

export default Component;
