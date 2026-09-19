import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgvi4xbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgvi4xbww"/>`,
		"fallback": "healthicons:phone",
	});
}

export default Component;
