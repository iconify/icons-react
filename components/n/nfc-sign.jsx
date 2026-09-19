import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wekyambyu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wekyambyu"/>`,
		"fallback": "flat-color-icons:nfc-sign",
	});
}

export default Component;
