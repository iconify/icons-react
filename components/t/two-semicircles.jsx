import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na-6mk1vc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="na-6mk1vc"/>`,
		"fallback": "icon-park-outline:two-semicircles",
	});
}

export default Component;
