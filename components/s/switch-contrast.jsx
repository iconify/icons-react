import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arm89gb_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arm89gb_t"/>`,
		"fallback": "icon-park-outline:switch-contrast",
	});
}

export default Component;
