import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkcp3mw6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkcp3mw6h"/>`,
		"fallback": "icon-park-outline:speaker-one",
	});
}

export default Component;
