import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix3m37btg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix3m37btg"/>`,
		"fallback": "icon-park-outline:right-one",
	});
}

export default Component;
