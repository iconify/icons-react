import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijwutn8tg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijwutn8tg"/>`,
		"fallback": "icon-park-outline:rotating-forward",
	});
}

export default Component;
