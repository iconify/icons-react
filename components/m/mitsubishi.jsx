import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s72-_6oay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s72-_6oay"/>`,
		"fallback": "icon-park-outline:mitsubishi",
	});
}

export default Component;
