import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eihpo_wmr.css';
import '../../css/z/z32ck6l6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eihpo_wmr"/><path class="z32ck6l6l"/>`,
		"fallback": "energy-icons:video-off-48-bold",
	});
}

export default Component;
