import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc-0ae3tv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc-0ae3tv"/>`,
		"fallback": "game-icons:swallow",
	});
}

export default Component;
