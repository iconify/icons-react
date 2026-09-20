import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwl4lns9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwl4lns9k"/>`,
		"fallback": "streamline-plump:trending-content-remix",
	});
}

export default Component;
