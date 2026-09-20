import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfgz-i8ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfgz-i8ol"/>`,
		"fallback": "streamline-plump:payment-recieve-7-remix",
	});
}

export default Component;
