import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wncb6lb7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wncb6lb7y"/>`,
		"fallback": "icon-park-outline:tool",
	});
}

export default Component;
